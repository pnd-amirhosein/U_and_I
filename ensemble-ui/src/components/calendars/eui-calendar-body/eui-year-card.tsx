import { Component, EventEmitter, Prop, h, Event, Element, State } from '@stencil/core';
import { monthNumberToText, monthTextToNumber } from 'packages/core/utils/helpers/date/calendar.utils';
import { HolidayEventType } from 'packages/core/utils/helpers/types';
import { Holiday } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-year-card',
    shadow: false,
    styleUrl: "../calendars.scss"
})
export class EUIYearCard {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "selectedDate" }) selectedDate?: Date;
    @Prop() interactive: boolean = true;
    @Prop({ attribute: "holidayEventType" }) holidayEventType: HolidayEventType = "none";
    @Prop() showHeader: boolean = true

    @Event() monthClick?: EventEmitter<Date>;

    @State() currentDate: Date = new Date();

    componentWillLoad() {
        this.currentDate = this.selectedDate ?? new Date();
    }

    onClickEvent = (month: number) => {

        this.currentDate = new Date(this.currentDate.getFullYear(), month, this.currentDate.getDate());
        this.monthClick?.emit(this.currentDate);
    }

    render() {

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['year', 'month', 'selectedDate', 'interactive', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);


        const holidayMap = new Map<string, Holiday[]>();

        return (
            <div {...attrs} class="eui--yrcard">

                <div class="months-grid">
                    {months.map((month, i) => {
                        const isCurrentMonth = monthNumberToText(this.currentDate.getMonth()) === month;
                        const isWeekend = (i + 1) % 7 === 0;
                        const key = `${this.currentDate.getFullYear()}-${this.currentDate.getMonth()}-${this.currentDate.getDate()}`;
                        const dayHolidays = holidayMap.get(key) ?? [];

                        return (
                            <div
                                class={{
                                    'day-cell': true,
                                    'is-current': isCurrentMonth,
                                    'is-selected': false,
                                    'is-weekend': isWeekend,
                                    'is-holiday': dayHolidays.some(x => x.isHoliday) ?? false,
                                }}
                                title={dayHolidays.map(h => h.name).join(' • ')}
                                onClick={() => this.onClickEvent(monthTextToNumber(month))}
                            >
                                {month}
                            </div>

                        );
                    })}
                </div>
            </div >
        );
    }
}
