import { Component, h, State, Element, Listen, Prop, EventEmitter, Event } from '@stencil/core';
import { computePosition, autoUpdate, offset, flip, shift } from '@floating-ui/dom';
import { deepEqual, deepGet } from '../../../packages/core/utils/helpers/deep'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-chips',
    styleUrl: './chips.scss',
    shadow: false,
})
export class EUIChips {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "displayField" }) displayField?: string;
    @Prop() placeholder: string = '';
    @Prop() data: any[] = [];
    @Prop() suggestions: any[] = [];

    @Event() itemSelected?: EventEmitter<any>;

    @State() loading: boolean = false;
    @State() value: string = '';
    @State() selectedChips: any[] = []
    @State() typingMode: boolean = false;
    @State() isChipsMenuOpen = false; // why state? cuz it is changing "counter" to "active" mode!


    private chipsClicked = false;
    private isDropdownOpen = false;
    private cleanupAutoUpdate?: () => void;
    public inputEl?: HTMLElement;
    private chipsEl: HTMLUListElement | null = null;
    private chipsMenuEl: HTMLElement | null = null;

    componentDidLoad() {
        const input = this.hostEl.querySelector('eui-input input');
        if (input) {
            input.addEventListener('click', this.typingModeEnabled.bind(this));
        }
    }

    // make openCloseDropDownMenu an arrow so `this` is preserved
    private openCloseDropDownMenu = (forceClose?: boolean) => {
        if (forceClose) this.isDropdownOpen = true;
        if (!this.isDropdownOpen) {
            this.suggestions = Array.isArray(this.data) ? this.data : [];
            if (this.suggestions.length) {
                this.renderChips();
            }
            this.isDropdownOpen = true
        } else {
            this.suggestions = []
            this.cleanupChips()
            this.isDropdownOpen = false
        }

    }
    private openCloseChipsMenu = (forceClose: boolean = false) => {



        if (forceClose) this.isChipsMenuOpen = true;
        if (!this.isChipsMenuOpen) {

            this.openCloseDropDownMenu(true);
            this.renderChipsMenu();
            this.isChipsMenuOpen = true
        } else {
            if (this.chipsMenuEl) {
                this.chipsMenuEl.style.display = 'none';
                this.chipsMenuEl.innerHTML = '';
            }
            this.isChipsMenuOpen = false
        }

    }

    private clear() {
        this.value = ''
        this.suggestions = [];
        this.openCloseDropDownMenu();

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
                this.renderChips();
            } else {
                this.cleanupChips();
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
        if (!displayValue) console.warn(`eui-chips: Could not resolve displayField "${this.displayField}" in:`, item);
        return displayValue || JSON.stringify(item);
    }

    private renderChips() {
        if (!this.chipsEl) {
            this.chipsEl = document.createElement('ul');
            this.chipsEl.className = 'suggestion-list';
            document.body.appendChild(this.chipsEl);
            // use mousedown so clicks on the list don't blur the input before click
            this.chipsEl.addEventListener('mousedown', () => {
                this.chipsClicked = true;
            });
        }

        // Refresh items
        this.chipsEl.innerHTML = '';
        this.suggestions.forEach(item => {
            const li = document.createElement('li');
            const itemContext = this.getSafeDisplay(item);
            li.textContent = itemContext;
            const icon = document.createElement('eui-icon');
            icon.type = "mini";
            icon.name = "check"

            li.appendChild(icon);
            if (this.selectedChips.find(x => { if (this.displayField) { return x[this.displayField] == itemContext } else false })) {
                li.classList.add("selected-item")
            }
            li.onclick = (e: MouseEvent) => this.selectItem(e, item);
            this.chipsEl!.appendChild(li);
        });

        if (this.suggestions.length === 0) {
            this.chipsEl.style.display = 'none';
            return;
        }

        this.chipsEl.style.display = 'block';

        // cleanup previous autoUpdate
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }

        // find the internal input element inside eui-input
        const trigger = this.hostEl.querySelector('eui-input input') as HTMLElement | null;
        if (!trigger) {
            console.warn('eui-chips: trigger input not found, cannot position chips.');
            return;
        }
        this.inputEl = trigger;

        // start floating-ui auto update
        this.cleanupAutoUpdate = autoUpdate(trigger, this.chipsEl, async () => {
            const { x, y } = await computePosition(trigger, this.chipsEl!, {
                placement: 'bottom-start',
                middleware: [offset(6), flip(), shift({ padding: 8 })],
            });

            Object.assign(this.chipsEl!.style, {
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

    private renderChipsMenu = () => {


        if (this.selectedChips.length == 0) return;

        if (this.isChipsMenuOpen)
            this.openCloseChipsMenu(true);

        this.isChipsMenuOpen = true;

        if (!this.chipsMenuEl) {
            this.chipsMenuEl = document.createElement('div');
            this.chipsMenuEl.classList.add("chips-menu");
            document.body.appendChild(this.chipsMenuEl);
        } else {
            this.chipsMenuEl.style.display = "flex"
        }

        this.chipsMenuEl.innerHTML = '';
        this.selectedChips.forEach(chipItem => {
            const contanier = document.createElement("div");
            contanier.classList.add("chip-container");

            const chip = document.createElement("div");
            chip.classList.add("chip");

            const icon = document.createElement('eui-icon');
            icon.type = "mini";
            icon.name = "x-mark"
            icon.addEventListener("click", () => this.deleteChip(chipItem, contanier))
            chip.appendChild(icon);

            const content = document.createElement("span");
            content.textContent = chipItem.title;

            chip.appendChild(icon);
            chip.appendChild(content);

            contanier.appendChild(chip);

            this.chipsMenuEl?.appendChild(contanier);

        })

        const trigger = this.hostEl.querySelector("eui-input input") as HTMLElement | null;

        if (!trigger) return;

        this.cleanupAutoUpdate = autoUpdate(trigger, this.chipsMenuEl, async () => {
            const { x, y } = await computePosition(trigger, this.chipsMenuEl!, {
                placement: 'bottom-start',
                middleware: [offset(6), flip(), shift({ padding: 8 })],
            });

            Object.assign(this.chipsMenuEl!.style, {
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

    private selectItem(e: MouseEvent, item: any) {
        // this.value = this.getSafeDisplay(item);
        // this.itemSelected?.emit(item);
        this.value = "";
        if (!this.selectedChips.find(x => deepEqual(x, item))) {

            this.selectedChips.push(item);
            (e.target as HTMLElement).classList.add("selected-item");
        }
        else {
            (e.target as HTMLElement).classList.remove("selected-item");
            this.selectedChips = this.selectedChips.filter(x => !deepEqual(x, item))
        }

        this.suggestions = [];
    }

    private cleanupChips() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
        if (this.chipsEl) {
            this.chipsEl.style.display = 'none';
            this.chipsEl.innerHTML = '';
        }
    }

    disconnectedCallback() {
        if (this.cleanupAutoUpdate) this.cleanupAutoUpdate();
    }

    private handleBlur() {
        this.typingMode = false;
        if (this.chipsClicked) {
            this.chipsClicked = false;
            return;
        }
        this.cleanupChips();
    }

    @Listen('click', { target: 'document', capture: true })
    handleOutsideClick(ev: Event) {
        const path = ev.composedPath();
        const clickedInsideChips =
            path.includes(this.hostEl) ||
            (this.chipsEl && path.includes(this.chipsEl));



        const clickedInsideChipsMenu =
            (this.chipsMenuEl && path.includes(this.chipsMenuEl)) || (ev.target as HTMLElement).classList.contains("counter");


        if (!clickedInsideChips) {
            this.openCloseDropDownMenu(true);
        }

        if (!clickedInsideChipsMenu) {
            this.openCloseChipsMenu(true);
        }
    }

    @Listen('clear')
    handleClear() {
        this.clear();
    }

    typingModeEnabled() {
        this.typingMode = true;

    }

    deleteChip = (chip: any, chipElement?: HTMLElement) => {
        this.selectedChips = this.selectedChips.filter(x => !deepEqual(x, chip));
        if (this.selectedChips.length == 0) {
            this.openCloseChipsMenu(true)
        }
        if (chipElement) {
            chipElement.style.display = "none"
        }
    }

    render() {

        // Grab all native attributes except props we handle
        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => ![
                "styleValue",
                "class",
                "displayField",
                "placeholder",
                "data",
                "suggestions",
            ].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <div class="chips"
                style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
            >
                <span class="chips-cover">
                    <div class="chips-box">
                        {!this.typingMode && this.selectedChips.map(chip =>
                        (
                            <div class="chip-container">
                                <div class={"chip"}>
                                    <eui-icon name="x-mark" type='solid' onClick={() => this.deleteChip(chip)} />
                                    <span>{chip.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {this.selectedChips.length > 0 &&
                        <span class={`counter ${this.isChipsMenuOpen ? "active" : ""}`} onClick={() => {
                            this.openCloseChipsMenu()
                        }}>{this.selectedChips.length}</span>}
                </span>
                <eui-input
                    value={this.value}
                    placeholder={this.placeholder}
                    onInput={(e: any) => this.onInput(e)}
                    onBlur={() => this.handleBlur()}
                    onClick={() => this.typingModeEnabled}
                    showClear={false}
                    {...attrs}
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
                            onClick={() => this.openCloseDropDownMenu()}
                        ></eui-icon>
                    </span>
                </eui-input>
            </div>
        );
    }
}
