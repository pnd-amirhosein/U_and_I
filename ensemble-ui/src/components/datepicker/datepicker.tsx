import { Component, h, State, Element, Listen, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { computePosition, autoUpdate, offset, flip, shift } from '@floating-ui/dom';
// import { deepGet } from '../../../packages/core/utils/helpers/deep'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { DatepickerViewEnum } from 'packages/core/utils/helpers/enums';

@Component({
    tag: 'eui-datepicker',
    styleUrl: './datepicker.scss',
    shadow: false,
})
export class EUIDatepicker {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "displayField" }) displayField?: string;
    @Prop() placeholder: string = '';
    @Prop() suggestions: any[] = [];
    @Prop({ attribute: "defaultValue" }) defaultValue: string = ''
    @Prop({ attribute: "noClearButton" }) noClearButton: boolean = false;
    @Prop() date: Date = new Date();

    @Event() itemSelected?: EventEmitter<any>;

    @State() currentDate: Date = new Date();
    @State() currentViewMode: DatepickerViewEnum = DatepickerViewEnum.year;
    @State() loading: boolean = false;
    @State() value: string = '';

    private datepickerClicked = false;
    private isOpen = false;
    private cleanupAutoUpdate?: () => void;
    public inputEl?: HTMLElement;
    private datepickerEl: HTMLElement | null = null;

    @Watch('defaultValue')
    defaultValueChanged(newValue: string) {
        if (newValue !== undefined) {
            this.value = newValue;
        }
    }

    // make openCloseDatepicker an arrow so `this` is preserved
    private openCloseDatepicker = (forceClose?: boolean) => {
        if (forceClose) this.isOpen = true;
        if (!this.isOpen) {
            this.suggestions = [];
            this.renderDatepicker();
            this.isOpen = true
        } else {
            this.suggestions = []
            this.cleanupDatepicker()
            this.isOpen = false
        }

    }
    private clear() {
        this.value = ''
        this.suggestions = [];
        this.openCloseDatepicker();

    }

    private renderDatepicker() {

        this.datepickerEl = this.hostEl.querySelector('.date-context-menu');
        // this.datepickerEl.className = 'date-context-menu';
        document.body.appendChild(this.datepickerEl!);
        // use mousedown so clicks on the list don't blur the input before click
        this.datepickerEl!.addEventListener('mousedown', () => {
            this.datepickerClicked = true;
        });

        this.datepickerEl!.style.display = 'block';

        // cleanup previous autoUpdate
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }

        // find the internal input element inside eui-input
        const trigger = this.hostEl.querySelector('eui-input input') as HTMLElement | null;
        if (!trigger) {
            console.warn('eui-datepicker: trigger input not found, cannot position datepicker.');
            return;
        }
        this.inputEl = trigger;

        // start floating-ui auto update
        this.cleanupAutoUpdate = autoUpdate(trigger, this.datepickerEl!, async () => {
            const { x, y } = await computePosition(trigger, this.datepickerEl!, {
                placement: 'bottom-start',
                middleware: [offset(6), flip(), shift({ padding: 8 })],
            });

            Object.assign(this.datepickerEl!.style, {
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

    private cleanupDatepicker() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
        if (this.datepickerEl) {
            this.datepickerEl.style.display = 'none';

            this.hostEl.appendChild(this.datepickerEl)
        }
    }

    disconnectedCallback() {
        if (this.cleanupAutoUpdate) this.cleanupAutoUpdate();
    }

    private handleBlur() {
        if (this.datepickerClicked) {
            this.datepickerClicked = false;
            return;
        }
        this.cleanupDatepicker();
    }

    @Listen('click', { target: 'document', capture: true })
    handleOutsideClick(ev: Event) {
        const path = ev.composedPath();
        const clickedInsideDatepicker =
            path.includes(this.hostEl) ||
            (this.datepickerEl && path.includes(this.datepickerEl));

        if (clickedInsideDatepicker) {
            return;
        }
        this.openCloseDatepicker(true);
    }

    @Listen('clear')
    handleClear() {
        this.clear();
    }

    componentWillLoad() {
        if (this.defaultValue !== undefined && this.defaultValue !== '') {
            this.value = this.defaultValue;
        }
    }

    changeDay = () => {

    }

    render() {

        console.log(this.defaultValue, this.value);


        // Grab all native attributes except props we handle
        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => ![
                "styleValue",
                "class",
                'displayField',
                'placeholder',
                'data',
                'suggestions'
            ].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <div class="eui--datepicker"
                style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
            >
                <span class="date-context-menu">{
                    (() => {

                        const year = new Date(this.currentDate).getFullYear();
                        const month = new Date(this.currentDate).getMonth();
                        // const day = new Date(this.currentDate).getDate();

                        switch (this.currentViewMode) {
                            case DatepickerViewEnum.year:
                                return (
                                    <eui-decade-card showHeader={false} selectedDate={this.currentDate} onDayClick={this.changeDay} holidayEventType="both" />
                                )
                            case DatepickerViewEnum.month:
                                return (
                                    <eui-year-card showHeader={false} selectedDate={this.currentDate} onDayClick={this.changeDay} holidayEventType="both" />
                                )
                            case DatepickerViewEnum.day:
                            default:
                                return (
                                    <eui-month-card showHeader={false} month={month} year={+year} onDayClick={this.changeDay} holidayEventType="both" />
                                )
                        }


                    })()
                }</span>
                <eui-input
                    value={this.value}
                    placeholder={this.placeholder}
                    onBlur={() => this.handleBlur()}
                    noClearButton={this.noClearButton}
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
                            onClick={() => this.openCloseDatepicker()}
                        ></eui-icon>
                    </span>
                </eui-input>
            </div>
        );
    }
}
