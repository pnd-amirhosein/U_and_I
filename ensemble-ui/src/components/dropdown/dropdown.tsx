import { Component, h, State, Element, Listen, Prop, EventEmitter, Event } from '@stencil/core';
import { computePosition, autoUpdate, offset, flip, shift } from '@floating-ui/dom';
import { deepGet } from '../../../packages/core/utils/helpers/deep'

@Component({
    tag: 'eui-dropdown',
    styleUrl: './dropdown.scss',
    shadow: false,
})
export class EUIDropdown {
    @Element() hostEl!: HTMLElement;

    @Prop() displayField?: string;
    @Prop() placeholder: string = '';
    @Prop() data: any[] = [];

    @Event() itemSelected?: EventEmitter<any>;

    @State() loading: boolean = false;
    @State() value: string = '';
    @Prop() suggestions: any[] = [];

    private dropdownClicked = false;
    private cleanupAutoUpdate?: () => void;
    public inputEl?: HTMLElement;
    private dropdownEl: HTMLUListElement | null = null;

    private async onInput(e: InputEvent) {
        this.value = (e.target as HTMLInputElement).value;

        this.suggestions = [];
        // console.log("disposo!", this.value, this.data);

        this.loading = true;

        try {
            if (this.displayField) {
                this.suggestions = this.data.filter(item => {
                    const values = deepGet(item, this.displayField!);
                    return values.some(v =>
                        String(v).toLowerCase().includes(this.value.toLowerCase())
                    );
                });


                // console.log("this.suggestions:", this.suggestions);

            } else {
                console.error('Error fetching suggestions: please add display field!');
            }
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            this.suggestions = [];
        } finally {
            this.loading = false;
            if (this.suggestions.length > 0) {
                console.log("this.suggestions:", this.suggestions);

                this.renderDropdown();
            } else {
                this.cleanupDropdown();
            }
        }
    }

    private getSafeDisplay(item: any): string {
        // 1. Handle primitives directly
        if (typeof item !== 'object' || item === null) {
            return String(item);
        }

        // 2. Use displayField path if provided
        if (this.displayField) {
            const values = deepGet(item, this.displayField); // can return array or single value
            if (Array.isArray(values)) {
                console.log("Array.isArray(values):", values);

                return String(values.join(' | ') ?? '')
            } else if (values !== undefined && values !== null) {
                return String(values);
            }
        }

        // 3. Reasonable fallbacks
        const displayValue = item.title || item.name || `Item (ID: ${item.id})`;
        if (!displayValue) {
            console.warn(` eui-dropdown: Could not resolve displayField "${this.displayField}" in:`, item);
        }

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

        // --- 🪶 Floating UI magic ---
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
            <div class="dropdown">
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
