import { Component, EventEmitter, Prop, h, Event, Element, State } from '@stencil/core';
import { formatHour12, getCalendarDays, removeExtraWeek } from 'packages/core/utils/helpers/date/calendar.utils';
import { HolidayService } from 'packages/core/utils/helpers/date/holiday.service';
import { CalendarEventType, Holiday, HolidayEventType } from 'packages/core/utils/helpers/types';
import { isToday } from 'packages/core/utils/helpers/date/isToday';
import { dayTimeHours } from 'packages/core/utils/helpers/date/holiday.data';


@Component({
    tag: 'eui-week-view',
    shadow: false,
    styleUrl: "../calendars.scss"
})
export class EUIWeekView {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() year!: number;
    @Prop() month!: number; // 0-based
    @Prop() week!: number; // 0-based
    @Prop({ attribute: "selectedDate" }) selectedDate?: Date;
    @Prop() interactive: boolean = true;
    @Prop({ attribute: "holidayEventType" }) holidayEventType: HolidayEventType = "none";
    @Prop({ attribute: "calendarEvents" }) calendarEvents: CalendarEventType[] = [];

    @Event() dayClick?: EventEmitter<Date>;

    @State() pxPerHour: number = 0;
    @State() pxPerMinute: number = 0;

    componentDidLoad() {
        const day = this.hostEl.querySelector(".day-time");
        this.pxPerHour = +(getComputedStyle(day!).height.replace("px", ""))
        this.pxPerMinute = this.pxPerHour / (60)
    }

    render() {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const days = getCalendarDays(this.year, this.month);
        const trimmedDays = removeExtraWeek(days, this.month);
        const selectedWeek = trimmedDays.slice(this.week * 7, (this.week + 1) * 7);

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
            <div {...attrs} class="eui--wkv">
                <div class="days-grid">
                    <span class='day-cell'>
                        <div class="week-days hide">
                            <div class="weekday">/</div>
                            <span><span class="date-badge">/</span></span>
                        </div>
                        {dayTimeHours.map(x => (<span class="day-time static show">{x}</span>))}
                    </span>
                    {selectedWeek.map((date, i) => {
                        const isCurrentMonth = date.getMonth() === this.month;
                        const isPrevMonth = date < new Date(this.year, this.month, 1);
                        const isNextMonth = date > new Date(this.year, this.month + 1, 0);
                        const isSelected =
                            this.selectedDate &&
                            date.toDateString() === this.selectedDate.toDateString();
                        const isWeekend = (i + 1) % 7 == 0;
                        const IsToday = isToday(date);
                        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
                        const dayHolidays = holidayMap.get(key) ?? [];

                        const events = this.calendarEvents.filter(x => x.startDate.getDate() == date.getDate());

                        return (
                            <div
                                class={{
                                    'day-cell': true,
                                    'is-current': isCurrentMonth,
                                    'is-today': IsToday,
                                    'is-prev': isPrevMonth,
                                    'is-next': isNextMonth,
                                    'is-selected': isSelected ?? false,
                                    'is-weekend': isWeekend,
                                    'is-holiday': dayHolidays.some(x => x.isHoliday) ?? false,
                                }}
                                title={dayHolidays.map(h => h.name).join(' • ')}
                                onClick={() => this.dayClick?.emit(date)}
                            >
                                <div class="week-days">
                                    <div class={`weekday ${{ "weekend": ((i + 1) == 7) }}`}>{weekdays[i]}</div>
                                    <span><span class="date-badge">{date.getDate()}</span></span>
                                </div>
                                <div class="day-box">
                                    {/* {dayTimeHours.map(x =>
                                    (<span class="day-time"
                                    // style={{ "height": this.pxPerHour + "px" }}
                                    >{x}</span>))} */}
                                    <span class="event-box">
                                        {events && (events.map(event => (<span class="event random-1"
                                            style={{
                                                "top": this.pxPerHour * event.startDate.getHours() + "px",
                                                "height": this.pxPerHour * (event.dueDate.getHours() - event.startDate.getHours()) + "px"
                                            }}
                                            onClick={(ev) => {
                                                ev.stopPropagation();
                                                console.log("skjdgfkgsdfkjgsdkjf");
                                                
                                            }}
                                        >
                                            <span title={event.title} class="event-title">{event.title}</span>
                                            <span>{formatHour12(event.startDate)}</span>
                                        </span>)))}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        );
    }
}
