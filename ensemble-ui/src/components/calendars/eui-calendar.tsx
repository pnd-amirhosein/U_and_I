import { Component, Prop, h, Element, State, Host } from '@stencil/core';
import { CalendarViewEnum } from 'packages/core/utils/helpers/enums'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { getCurrentWeekIndex } from 'packages/core/utils/helpers/date/calendar.utils'
import { CalendarEventType, EuiCalendarHeaderCustomEvent, HolidayEventType } from 'src/components';

@Component({
    tag: 'eui-calendar',
    styleUrl: "./calendars.scss",
    shadow: false,
})
export class EUICalendar {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "selectedDate" }) selectedDate: Date = new Date();
    @Prop() interactive: boolean = true;
    @Prop({ attribute: "holidayEventType" }) holidayEventType: HolidayEventType = "none";
    @Prop({ attribute: "calendarEvents" }) calendarEvents: CalendarEventType[] = [];
    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "calendarViewMode" }) calendarViewMode: CalendarViewEnum = CalendarViewEnum.year;

    @State() currentDate: Date = new Date();
    @State() currentViewMode: CalendarViewEnum = CalendarViewEnum.year;

    componentWillLoad() {
        this.currentDate = new Date(this.selectedDate) ?? new Date();
        this.currentViewMode = this.calendarViewMode ?? CalendarViewEnum.year;
    }

    onDateChange = (e: EuiCalendarHeaderCustomEvent<Date>) => {
        this.currentDate = new Date(e.detail);
    }

    onViewChange = (event: EuiCalendarHeaderCustomEvent<any>) => {
        this.currentViewMode = (event.detail ?? CalendarViewEnum.year) as CalendarViewEnum;
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        // const data = Object.values(CalendarViewEnum).map(x => ({ name: x }));

        const year = new Date(this.currentDate).getFullYear();
        const month = new Date(this.currentDate).getMonth();
        const week = getCurrentWeekIndex(this.currentDate);
        const day = new Date(this.currentDate).getDate();

        console.log("From render: ", year, month, week, day);



        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        "eui--calendar": true
                    }}
                >
                    <eui-calendar-header onDateChange={this.onDateChange} onViewChange={this.onViewChange} selectedDate={this.currentDate} calendarViewMode={this.currentViewMode} />
                    {
                        (() => {
                            console.log("From cal:", this.currentViewMode, this.currentViewMode == CalendarViewEnum.year);

                            switch (this.currentViewMode) {
                                case CalendarViewEnum.year:
                                    return (<eui-year holidayEventType={this.holidayEventType} year={year} />);
                                case CalendarViewEnum.month:
                                    return (<eui-month-view calendarEvents={this.calendarEvents} holidayEventType={this.holidayEventType} year={year} month={+month} />);
                                case CalendarViewEnum.week:
                                    return (<eui-week-view calendarEvents={this.calendarEvents} holidayEventType={this.holidayEventType} year={year} month={+month} week={week} />)
                                case CalendarViewEnum.day:
                                    return (<eui-day-view selectedDate={this.currentDate} calendarEvents={this.calendarEvents} holidayEventType={this.holidayEventType} year={year} month={+month} week={week} day={day} />)
                                default:
                                    break;
                            }
                        })()
                    }

                </div>
            </Host>
        );
    }
}
