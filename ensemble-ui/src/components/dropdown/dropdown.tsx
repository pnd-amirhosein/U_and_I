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
    private isOpen = false;
    private cleanupAutoUpdate?: () => void;
    public inputEl?: HTMLElement;
    private dropdownEl: HTMLUListElement | null = null;

    // make openCloseDropdown an arrow so `this` is preserved
    private openCloseDropdown = (forceClose?: boolean) => {
        if (forceClose) this.isOpen = true;
        if (!this.isOpen) {
            this.suggestions = Array.isArray(this.data) ? this.data : [];
            if (this.suggestions.length) {
                this.renderDropdown();
            }
            this.isOpen = true
        } else {
            this.suggestions = []
            this.cleanupDropdown()
            this.isOpen = false
        }

    }
    private clear() {
        this.value = ''
        this.suggestions = [];
        this.openCloseDropdown();

    }

    private async onInput(e: InputEvent) {
        this.value = (e.target as HTMLInputElement).value;
        this.suggestions = [];
        this.loading = true;

        try {
            if (this.displayField) {
                const q = this.value.toLowerCase();
                const candidates = Array.isArray(this.data) ? this.data : [];
                this.suggestions = candidates.filter(item => {
                    const values = deepGet(item, this.displayField!);
                    if (Array.isArray(values)) {
                        return values.some(v => String(v).toLowerCase().includes(q));
                    }
                    if (values !== undefined && values !== null) {
                        return String(values).toLowerCase().includes(q);
                    }
                    return false;
                });
            } else {
                console.error('Error fetching suggestions: please add display field!');
            }
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
        if (typeof item !== 'object' || item === null) return String(item);

        if (this.displayField) {
            const values = deepGet(item, this.displayField);
            if (Array.isArray(values)) {
                return String(values.slice(0, 3).join(' | ') ?? '');
            } else if (values !== undefined && values !== null) {
                return String(values);
            }
        }

        const displayValue = item.title ?? item.name ?? `Item (ID: ${item.id})`;
        if (!displayValue) console.warn(`eui-dropdown: Could not resolve displayField "${this.displayField}" in:`, item);
        return displayValue || JSON.stringify(item);
    }

    private renderDropdown() {
        if (!this.dropdownEl) {
            this.dropdownEl = document.createElement('ul');
            this.dropdownEl.className = 'suggestion-list';
            document.body.appendChild(this.dropdownEl);
            // use mousedown so clicks on the list don't blur the input before click
            this.dropdownEl.addEventListener('mousedown', () => {
                this.dropdownClicked = true;
            });
        }

        // Refresh items
        this.dropdownEl.innerHTML = '';
        this.suggestions.forEach(item => {
            const li = document.createElement('li');
            const itemContext = this.getSafeDisplay(item);
            li.textContent = itemContext;
            const icon = document.createElement('eui-icon');
            icon.type = "mini";
            icon.name = "check"
            li.appendChild(icon);
            if (itemContext == this.value) {
                li.classList.add("selected-item")
            }
            li.onclick = () => this.selectItem(item);
            this.dropdownEl!.appendChild(li);
        });

        if (this.suggestions.length === 0) {
            this.dropdownEl.style.display = 'none';
            return;
        }

        this.dropdownEl.style.display = 'block';

        // cleanup previous autoUpdate
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }

        // find the internal input element inside eui-input
        const trigger = this.hostEl.querySelector('eui-input input') as HTMLElement | null;
        if (!trigger) {
            console.warn('eui-dropdown: trigger input not found, cannot position dropdown.');
            return;
        }
        this.inputEl = trigger;

        // start floating-ui auto update
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
        this.value = this.getSafeDisplay(item);
        this.itemSelected?.emit(item);
        this.suggestions = [];
        this.openCloseDropdown();
    }

    private cleanupDropdown() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
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

    @Listen('click', { target: 'document', capture: true })
    handleOutsideClick(ev: Event) {
        const path = ev.composedPath();
        const clickedInsideDropdown =
            path.includes(this.hostEl) ||
            (this.dropdownEl && path.includes(this.dropdownEl));

        if (clickedInsideDropdown) {
            // Inside click → ignore
            return;
        }
        console.log("BLOOMBERG", ev);
        this.openCloseDropdown(true);
    }

    @Listen('clear')
    handleClear() {
        console.log(90780987098709879, "is happening!");

        this.clear();
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
                    <span class="icon-end" slot="icon-end">
                        {this.loading && (
                            <eui-icon
                                name="third-spinner"
                                type="mini"
                                class="rotate"
                            ></eui-icon>
                        )}
                        <eui-icon
                            name="chevron-down"
                            type="mini"
                            class="menu-opener"
                            onClick={() => this.openCloseDropdown()}
                        ></eui-icon>
                    </span>
                </eui-input>
            </div>
        );
    }
}
