import { Component, EventEmitter, Prop, h, Event, Element, State, Host } from '@stencil/core';
import { CalendarViewEnum } from 'packages/core/utils/helpers/enums'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { monthNumberToText, daysInMonth, weeksInMonth, getWeekOfMonth, getCalendarDays, removeExtraWeek } from 'packages/core/utils/helpers/date/calendar.utils'
import { NavigatorInfo } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-calendar-navigator',
    styleUrl: "./calendars.scss",
    shadow: false,
})
export class EUICalendarNavigator {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "selectedDate" }) selectedDate: Date = new Date();
    @Prop() interactive: boolean = true;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "calendarViewMode" }) calendarViewMode: CalendarViewEnum = CalendarViewEnum.year;

    @Event() dayClick?: EventEmitter<Date>;

    @State() selectedDay: Date = new Date();
    @State() currentValue: number = 0;

    componentWillLoad() {
        this.selectedDay = new Date(this.selectedDate) ?? new Date();
    }

    onClickEvent = (date: Date) => {
        this.dayClick?.emit(date);
        this.selectedDay = date;
    }

    onViewChange = (event: Event) => {
        console.log(event);
    }

    next = (current: number) => {
        this.selectedDay = this.createNewDate(current + 1)
    }

    prev = (current: number) => {
        this.selectedDay = this.createNewDate(current - 1)
    }

    // createNewDate = (value: number): Date => {
    //     switch (this.calendarViewMode) {
    //         case CalendarViewEnum.year:
    //             return new Date(value, this.selectedDay.getMonth(), this.selectedDay.getDate())
    //         case CalendarViewEnum.month:
    //             return new Date(this.selectedDay.getFullYear(), value, this.selectedDay.getDate())
    //         case CalendarViewEnum.day:
    //             return new Date(this.selectedDay.getFullYear(), this.selectedDay.getMonth(), value)
    //         case CalendarViewEnum.week:
    //             return new Date(this.selectedDay.getFullYear(), this.selectedDay.getMonth(), value)
    //         default:
    //             return new Date(0);
    //     }
    // }

    createNewDate = (value: number): Date => {

        const base = new Date(this.selectedDay);

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

                const correctGrid = removeExtraWeek(grid, base.getMonth())

                const weekAnchors = correctGrid.filter((_, index) => index % 7 === 0);

                const index = grid.findIndex(d =>
                    d.toDateString() === base.toDateString()
                );

                const currentWeek = Math.floor(index / 7);

                const targetAnchor = weekAnchors[currentWeek];

                return new Date(base.getFullYear(), base.getMonth(), targetAnchor.getDate());
            }
        }

    };


    getNavigatorInfo = (date: Date): NavigatorInfo => {

        switch (this.calendarViewMode) {

            case CalendarViewEnum.day:

                return {
                    min: 1,
                    max: daysInMonth(date),
                    value: this.selectedDay.getDate(),
                    text: this.selectedDay.getDate().toString()
                };

            case CalendarViewEnum.week:

                return {
                    min: 1,
                    max: weeksInMonth(date),
                    value: getWeekOfMonth(this.selectedDay),
                    text: `${getWeekOfMonth(this.selectedDay)}`
                };

            case CalendarViewEnum.month:

                return {
                    min: 0,
                    max: 11,
                    value: this.selectedDay.getMonth(),
                    text: monthNumberToText(this.selectedDay.getMonth(), "en-US")
                };

            case CalendarViewEnum.year:

                return {
                    min: Number.MIN_SAFE_INTEGER,
                    max: Number.MAX_SAFE_INTEGER,
                    value: this.selectedDay.getFullYear(),
                    text: this.selectedDay.getFullYear().toString()
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

        console.log(this.selectedDay, typeof this.selectedDay, 93485798347);

        const MinMaxValue: NavigatorInfo = this.getNavigatorInfo(this.selectedDay);

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        "eui--navigator": true
                    }}
                >
                    <div class={`item previous-button ${+this.currentValue == MinMaxValue.min ? "disable" : ""}`} onClick={() => { this.prev(MinMaxValue.value) }}>
                        <eui-icon name="chevron-left" type="mini" />
                    </div>
                    <div class="current-value">
                        <span class="month">{MinMaxValue.text}</span>
                    </div>
                    <div class={`item next-button ${+this.currentValue == MinMaxValue.max ? "disable" : ""}`} onClick={() => { this.next(MinMaxValue.value) }}>
                        <eui-icon name="chevron-right" type="mini" />
                    </div>
                </div>
            </Host>
        );
    }
}
