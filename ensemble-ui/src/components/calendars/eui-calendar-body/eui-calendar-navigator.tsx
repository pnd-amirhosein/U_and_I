import { Component, EventEmitter, Prop, h, Event, Element, State, Host } from '@stencil/core';
import { CalendarViewEnum } from 'packages/core/utils/helpers/enums'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { monthNumberToText, daysInMonth, weeksInMonth, getWeekOfMonth, getCurrentWeekIndex, getCalendarDays, removeExtraWeek } from 'packages/core/utils/helpers/date/calendar.utils'
import { NavigatorInfo } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-calendar-navigator',
    styleUrl: "../calendars.scss",
    shadow: false,
})
export class EUICalendarNavigator {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "selectedDate" }) selectedDate: Date = new Date();
    @Prop() interactive: boolean = true;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "calendarViewMode" }) calendarViewMode: CalendarViewEnum = CalendarViewEnum.year;

    @Event() dateChange?: EventEmitter<Date>;

    @State() currentDate: Date = new Date();
    @State() currentValue: number = 0;

    componentWillLoad() {
        this.currentDate = new Date(this.selectedDate) ?? new Date();
    }

    next = (current: number) => {
        this.currentDate = this.createNewDate(current + 1)
        this.dateChange?.emit(this.currentDate);
    }

    prev = (current: number) => {
        this.currentDate = this.createNewDate(current - 1)
        this.dateChange?.emit(this.currentDate);
    }

    createNewDate = (value: number): Date => {

        const base = new Date(this.currentDate);

        switch (this.calendarViewMode) {

            case CalendarViewEnum.year: {
                base.setFullYear(value);
                return base;
            }

            case CalendarViewEnum.month: {
                base.setMonth(value);
                return base;
            }

            case CalendarViewEnum.day: {
                base.setDate(value);
                return base;
            }

            case CalendarViewEnum.week: {

                const grid = getCalendarDays(base.getFullYear(), base.getMonth());

                const correctGrid = removeExtraWeek(grid, base.getMonth());

                const currentWeek = getCurrentWeekIndex(base, correctGrid)

                console.log("IF CalendarViewEnum.week:", currentWeek, value, base);


                if (currentWeek == 0 && value == -1) return base;

                const weekStart = (currentWeek + value) * 7;
                const weekEnd = weekStart + 7;

                const targetAnchor =
                    correctGrid
                        .slice(weekStart, weekEnd)
                        .find(x => x.getMonth() === base.getMonth())
                    ?? correctGrid[weekStart];

                console.log("CalendarViewEnum.week:", currentWeek, value, targetAnchor, weekStart, weekEnd, correctGrid);

                return new Date(targetAnchor);
            }
        }
    };

    getNavigatorInfo = (date: Date): NavigatorInfo => {

        switch (this.calendarViewMode) {

            case CalendarViewEnum.day:

                return {
                    min: 1,
                    max: daysInMonth(date),
                    value: this.currentDate.getDate(),
                    text: this.currentDate.getDate().toString()
                };

            case CalendarViewEnum.week:

                return {
                    min: 1,
                    max: weeksInMonth(date),
                    value: getWeekOfMonth(this.currentDate),
                    text: `${getWeekOfMonth(this.currentDate)}`
                };

            case CalendarViewEnum.month:

                return {
                    min: 0,
                    max: 11,
                    value: this.currentDate.getMonth(),
                    text: monthNumberToText(this.currentDate.getMonth(), "short")
                };

            case CalendarViewEnum.year:

                return {
                    min: Number.MIN_SAFE_INTEGER,
                    max: Number.MAX_SAFE_INTEGER,
                    value: this.currentDate.getFullYear(),
                    text: this.currentDate.getFullYear().toString()
                };
        }
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        console.log(this.calendarViewMode, 93485798347);

        const MinMaxValue: NavigatorInfo = this.getNavigatorInfo(this.currentDate);

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        "eui--calendar-navigator": true
                    }}
                >
                    <div class={`item previous-button ${+this.currentValue == MinMaxValue.min ? "disable" : ""}`}
                        onClick={() => { this.prev(this.calendarViewMode == CalendarViewEnum.week ? 0 : MinMaxValue.value) }}>
                        <eui-icon name="chevron-left" type="mini" />
                    </div>
                    <div class="current-value">
                        <span class="month">{MinMaxValue.text}</span>
                    </div>
                    <div class={`item next-button ${+this.currentValue == MinMaxValue.max ? "disable" : ""}`}
                        onClick={() => { this.next(this.calendarViewMode == CalendarViewEnum.week ? 0 : MinMaxValue.value) }}>
                        <eui-icon name="chevron-right" type="mini" />
                    </div>
                </div>
            </Host>
        );
    }
}
