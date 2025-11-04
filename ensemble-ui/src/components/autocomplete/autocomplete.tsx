import { Component, h, State, Element, Listen, Prop, EventEmitter, Event } from '@stencil/core';
import { computePosition, autoUpdate, offset, flip, shift } from '@floating-ui/dom';

@Component({
  tag: 'eui-auto-complete',
  styleUrl: './autocomplete.scss',
  shadow: false,
})
export class EUIAutoComplete {
  @Element() hostEl!: HTMLElement;

  @Prop() fetchSuggestions?: (query: string) => Promise<any[]>;
  @Prop() displayField?: string;
  @Prop() placeholder: string = '';

  @Event() itemSelected?: EventEmitter<any>;

  @State() loading: boolean = false;
  @State() value: string = '';
  @State() suggestions: any[] = [];

  private dropdownClicked = false;
  private cleanupAutoUpdate?: () => void;
  public inputEl?: HTMLElement;
  private dropdownEl: HTMLUListElement | null = null;

  private async onInput(e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value;

    // Check if the fetchSuggestions prop was actually provided
    if (typeof this.fetchSuggestions !== 'function') {
      console.warn('eui-auto-complete: No fetchSuggestions function provided.');
      return;
    }

    this.loading = true;
    this.suggestions = [];

    try {
      // This promise now resolves with any[]
      const results = await this.fetchSuggestions(this.value);
      this.suggestions = results;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      this.suggestions = [];
    } finally {
      this.loading = false;
      if (this.suggestions.length > 0) {
        this.renderDropdown();
      } else {
        this.cleanupDropdown();
      }
    }
  }

  private getSafeDisplay(item: any): string {
    // 1. If it's a primitive (like a string), return it directly.
    if (typeof item !== 'object' || item === null) {
      return String(item);
    }

    // 2. If displayField is specified, try to use it.
    if (this.displayField && item[this.displayField]) {
      return String(item[this.displayField]);
    }

    // 3. Fallback: If no displayField or the field is missing, 
    //    we return a placeholder string instead of the whole JSON.
    //    We can still log the warning if you want, but this prevents the ugly input value.
    const displayValue = item.title || item.name || `Item (ID: ${item.id})`; // Try common fields

    if (!this.displayField) {
      console.warn("eui-auto-complete: No 'displayField' prop provided. Using best guess or JSON string.");
    }

    // Only warn about missing field if displayField *was* set.
    if (this.displayField && !item[this.displayField]) {
      console.warn(`displayField "${this.displayField}" not found in item.`, item);
    }

    // Use a reasonable fallback display value
    return displayValue || JSON.stringify(item);
  }

  private renderDropdown() {
    if (!this.dropdownEl) {
      this.dropdownEl = document.createElement('ul');
      this.dropdownEl.className = 'suggestion-list';
      document.body.appendChild(this.dropdownEl);
      this.dropdownEl.addEventListener('mousedown', () => {
        this.dropdownClicked = true;
      });
    }

    // Refresh items
    this.dropdownEl.innerHTML = '';
    this.suggestions.forEach(item => {
      const li = document.createElement('li');
      li.textContent = this.getSafeDisplay(item);
      li.onclick = () => this.selectItem(item);
      this.dropdownEl!.appendChild(li);
    });

    if (this.suggestions.length === 0) {
      this.dropdownEl.style.display = 'none';
      return;
    }

    this.dropdownEl.style.display = 'block';

    // --- Floating UI magic ---
    if (this.cleanupAutoUpdate) {
      this.cleanupAutoUpdate(); // stop previous observer
    }

    const trigger = this.hostEl.querySelector('eui-input input') as HTMLElement;
    this.inputEl = trigger;

    this.cleanupAutoUpdate = autoUpdate(trigger, this.dropdownEl, async () => {
      const { x, y } = await computePosition(trigger, this.dropdownEl!, {
        placement: 'bottom-start',
        middleware: [offset(6), flip(), shift({ padding: 8 })],
      });

      Object.assign(this.dropdownEl!.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${trigger.offsetWidth}px`,
        zIndex: '9999',
        visibility: 'visible',
        opacity: '1',
      });
    });
  }


  private selectItem(item: any) {
    // 1. Set the input's visual value to the display text (e.g., the title)
    this.value = this.getSafeDisplay(item);

    // 2. Emit the full object for the consumer (Angular parent)
    this.itemSelected?.emit(item);

    // 3. Cleanup the component state
    this.suggestions = [];
    this.cleanupDropdown();
  }

  private cleanupDropdown() {
    if (this.cleanupAutoUpdate) {
      this.cleanupAutoUpdate(); // stop listeners
      this.cleanupAutoUpdate = undefined;
    }
    if (this.dropdownEl) {
      this.dropdownEl.style.display = 'none';
      this.dropdownEl.innerHTML = '';
    }
  }

  disconnectedCallback() {
    if (this.cleanupAutoUpdate) this.cleanupAutoUpdate();
  }

  private handleBlur() {
    if (this.dropdownClicked) {
      this.dropdownClicked = false;
      return;
    }
    this.cleanupDropdown();
  }

  @Listen('document:click', { capture: true })
  handleOutsideClick(ev: Event) {
    if (!this.hostEl.contains(ev.target as Node)) {
      this.cleanupDropdown();
    }
  }

  render() {
    return (
      <div class="auto-complete">
        <eui-input
          value={this.value}
          placeholder={this.placeholder}
          onInput={(e: any) => this.onInput(e)}
          onBlur={() => this.handleBlur()}
        >
          {this.loading && (
            <eui-icon
              slot="icon-end"
              name="third-spinner"
              type="mini"
              class="rotate"
            ></eui-icon>
          )}
        </eui-input>
      </div>
    );
  }
}
