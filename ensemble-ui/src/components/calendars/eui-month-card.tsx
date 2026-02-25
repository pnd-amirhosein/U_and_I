import { Component, EventEmitter, Prop, h, Event, Element } from '@stencil/core';
import { getCalendarDays } from 'packages/core/utils/helpers/date/calendar.utils';
import { HolidayService } from 'packages/core/utils/helpers/date/holiday.service';
import { HolidayEventType } from 'packages/core/utils/helpers/types';
import { Holiday } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-month-card',
    shadow: false,
    styleUrl: "./calendars.scss"
})
export class EUIMonthCard {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() year!: number;
    @Prop() month!: number; // 0-based
    @Prop({ attribute: "selectedDate" }) selectedDate?: Date;
    @Prop() interactive: boolean = true;
    @Prop({ attribute: "holidayEventType" }) holidayEventType: HolidayEventType = "none";

    @Event() dayClick?: EventEmitter<Date>;

    render() {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const days = getCalendarDays(this.year, this.month);

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['year', 'month', 'selectedDate', 'interactive', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        const holidays = HolidayService.getHolidaysForMonth(
            this.year,
            this.month,
            this.holidayEventType
        );

        const holidayMap = new Map<string, Holiday[]>();

        holidays.forEach(h => {
            const key = `${this.year}-${h.month}-${h.day}`;

            if (!holidayMap.has(key)) {
                holidayMap.set(key, []);
            }

            holidayMap.get(key)!.push(h);
        });


        return (
            <div {...attrs} class="eui--mntcard">

                <div class="weekdays">
                    {weekdays.map((day, i) => (
                        <div class={`weekday ${((i + 1) === 7) ? "weekend" : ""}`}>{day}</div>
                    ))}
                </div>

                <div class="days-grid">
                    {days.map((date, i) => {
                        const isCurrentMonth = date.getMonth() === this.month;
                        const isPrevMonth = date < new Date(this.year, this.month, 1);
                        const isNextMonth = date > new Date(this.year, this.month + 1, 0);
                        const isSelected =
                            this.selectedDate &&
                            date.toDateString() === this.selectedDate.toDateString();
                        const isWeekend = (i + 1) % 7 === 0;
                        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
                        const dayHolidays = holidayMap.get(key) ?? [];

                        return (
                            <div
                                class={{
                                    'day-cell': true,
                                    'is-current': isCurrentMonth,
                                    'is-prev': isPrevMonth,
                                    'is-next': isNextMonth,
                                    'is-selected': isSelected ?? false,
                                    'is-weekend': isWeekend,
                                    'is-holiday': dayHolidays.some(x => x.isHoliday) ?? false,
                                }}
                                title={dayHolidays.map(h => h.name).join(' • ')}
                                onClick={() => this.dayClick?.emit(date)}
                            >
                                {date.getDate()}
                            </div>

                        );
                    })}
                </div>
            </div >
        );
    }
}
