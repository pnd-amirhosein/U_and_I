import { Component, h, State, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'eui-auto-complete',
  styleUrl: './autocomplete.scss',
  shadow: false,
})
export class EUIAutoComplete {
  @Element() hostEl!: HTMLElement;

  @Prop() fetchSuggestions?: (query: string) => Promise<string[]>;
  @Prop() placeholder: string = '';

  @State() loading: boolean = false;
  @State() value: string = '';
  @State() suggestions: string[] = [];

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
    this.suggestions = []; // Clear old suggestions

    try {
      // Call the function passed in from Angular!
      // The .toPromise() in your Angular code makes this work perfectly.
      const results = await this.fetchSuggestions(this.value);
      this.suggestions = results;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      this.suggestions = []; // Clear on error
    } finally {
      this.loading = false;
      // Only render if we got results and are still focused
      if (this.suggestions.length > 0) {
        this.renderDropdown();
      } else {
        this.cleanupDropdown(); // No results, hide it
      }
    }
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

    // Populate suggestions
    this.dropdownEl.innerHTML = '';
    this.suggestions.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.onclick = () => this.selectItem(item);
      this.dropdownEl!.appendChild(li);
    });

    if (this.suggestions.length === 0) {
      this.dropdownEl.style.display = 'none';
    } else {
      this.dropdownEl.style.display = 'block';
    }
  }

  private selectItem(item: string) {
    console.log(12, item);

    this.value = item;
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
