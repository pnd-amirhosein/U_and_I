import { Component, h, State, Element, Listen, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { computePosition, autoUpdate, offset, flip, shift } from '@floating-ui/dom';
// import { deepGet } from '../../../packages/core/utils/helpers/deep'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { DatepickerViewEnum } from 'packages/core/utils/helpers/enums';
import { monthNumberToText } from 'packages/core/utils/helpers/date/calendar.utils';

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
    @State() currentDecade: number[] = [1900 - 1909]

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

        const startingDecade = Math.floor(this.currentDate.getFullYear() / 10) * 10;
        const endingDecade = startingDecade + 9;
        this.currentDecade = [startingDecade, endingDecade]
    }

    changeDay = () => {

    }

    changeToDay = () => {
        this.currentViewMode = DatepickerViewEnum.day;
    }

    changeToMonth = () => {
        this.currentViewMode = DatepickerViewEnum.month;
    }

    changeToYear = () => {
        this.currentViewMode = DatepickerViewEnum.year;
    }

    nextDecade = () => {
        this.currentDecade = [this.currentDecade[0] + 10, this.currentDecade[1] + 10];
    }
    previousDecade = () => {
        this.currentDecade = [this.currentDecade[0] - 10, this.currentDecade[1] - 10];
    }

    nextDay = () => {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 1)
    }
    previousDay = () => {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() - 1)
    }

    render() {

        console.log("currentDecade: ", this.currentDecade);


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
                                    <div class="date-container">
                                        <div class="topbar">
                                            <eui-icon
                                                name="arrow-left"
                                                type="mini"
                                                class="menu-opener"
                                                onClick={this.previousDecade}
                                            ></eui-icon>
                                            <div class="central-value" onClick={this.changeToDay}>
                                                <span class="start">{this.currentDecade[0]}</span>
                                                <span class="start">-</span>
                                                <span class="start">{this.currentDecade[1]}</span>
                                            </div>
                                            <eui-icon
                                                name="arrow-right"
                                                type="mini"
                                                class="menu-opener"
                                                onClick={this.nextDecade}
                                            ></eui-icon>
                                        </div>
                                        <eui-decade-card showHeader={false} startingYear={this.currentDecade[0]} selectedDate={this.currentDate} onDayClick={this.changeDay} holidayEventType="both" />
                                    </div>
                                )
                            case DatepickerViewEnum.month:
                                return (
                                    <div class="date-container">
                                        <div class="topbar">
                                            <eui-icon
                                                name="arrow-left"
                                                type="mini"
                                                class="menu-opener"
                                                onClick={this.previousDecade}
                                            ></eui-icon>
                                            <div class="central-value" onClick={this.changeToYear}>
                                                <span class="year">{year}</span>
                                            </div>
                                            <eui-icon
                                                name="arrow-right"
                                                type="mini"
                                                class="menu-opener"
                                                onClick={this.nextDecade}
                                            ></eui-icon>
                                        </div>
                                        <eui-year-card showHeader={false} selectedDate={this.currentDate} onDayClick={this.changeDay} holidayEventType="both" />
                                    </div>
                                )
                            case DatepickerViewEnum.day:
                            default:
                                return (
                                    <div class="date-container">
                                        <div class="topbar">
                                            <eui-icon
                                                name="arrow-left"
                                                type="mini"
                                                class="menu-opener"
                                                onClick={this.previousDecade}
                                            ></eui-icon>
                                            <div class="central-value" onClick={this.changeToMonth}>
                                                <span class="year">{year}, {monthNumberToText(month, "short")}</span>
                                            </div>
                                            <eui-icon
                                                name="arrow-right"
                                                type="mini"
                                                class="menu-opener"
                                                onClick={this.nextDecade}
                                            ></eui-icon>

                                        </div>
                                        <eui-month-card showHeader={false} month={month} year={+year} onDayClick={this.changeDay} holidayEventType="both" />
                                    </div>
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
                        <eui-icon
                            name="calendar"
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
