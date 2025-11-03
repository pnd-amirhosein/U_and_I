import { Component, h, State, Element, Listen, Prop, EventEmitter, Event } from '@stencil/core';

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

    // Position relative to input
    const inputRect = this.hostEl.getBoundingClientRect();
    this.dropdownEl.style.position = 'absolute';
    this.dropdownEl.style.top = `${inputRect.bottom + window.scrollY + 15}px`;
    this.dropdownEl.style.left = `${inputRect.left + window.scrollX}px`;
    this.dropdownEl.style.width = `${inputRect.width}px`;
    this.dropdownEl.style.zIndex = '9999';

    this.dropdownEl.innerHTML = '';
    this.suggestions.forEach(item => {
      const li = document.createElement('li');

      // Use the helper to get the display text
      li.textContent = this.getSafeDisplay(item);

      // Pass the *full object* to selectItem
      li.onclick = () => this.selectItem(item);

      this.dropdownEl!.appendChild(li);
    });

    if (this.suggestions.length === 0) {
      this.dropdownEl.style.display = 'none';
    } else {
      this.dropdownEl.style.display = 'block';
    }
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

    if (this.dropdownEl) {
      this.dropdownEl.style.display = 'none';
      this.dropdownEl.innerHTML = '';
    }

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
