import { Component, EventEmitter, Prop, h, Event, Element, State, Host } from '@stencil/core';
import { CalendarViewEnum } from 'packages/core/utils/helpers/enums'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { monthNumberToText } from 'packages/core/utils/helpers/date/calendar.utils'

@Component({
    tag: 'eui-calendar-header',
    styleUrl: "./calendars.scss",
    shadow: false,
})
export class EUICalendarHeader {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "selectedDate" }) selectedDate?: Date;
    @Prop() interactive: boolean = true;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop({ attribute: "calendarViewMode" }) calendarViewMode: CalendarViewEnum = CalendarViewEnum.year;

    @Event() dayClick?: EventEmitter<Date>;

    @State() selectedDay: Date = new Date();

    componentWillLoad() {
        this.selectedDay = this.selectedDate ?? new Date();
    }

    onClickEvent = (date: Date) => {
        this.dayClick?.emit(date);
        this.selectedDay = date;
    }

    onViewChange = (event: Event) => {
        console.log(event);
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        const data = Object.values(CalendarViewEnum).map(x => ({ name: x }));

        console.log(this.selectedDay, typeof this.selectedDay, 93485798347);

        const year = new Date(this.selectedDay).getFullYear();
        const month = monthNumberToText(new Date(this.selectedDay).getMonth(), "short");
        const day = new Date(this.selectedDay).getDate();


        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        "eui--calendar-header": true
                    }}
                >
                    <div class="right-bar">
                        <span class="month">{month},</span>
                        <span class="day">{day},</span>
                        <span class="year">{year}</span>
                    </div>
                    <span class="left-bar">
                        <eui-dropdown
                            data={data}
                            defaultValue={this.calendarViewMode}
                            displayField="name"
                            onItemSelected={this.onViewChange}
                            placeholder="Search views..."
                            noClearButton={true}
                        />
                    </span>
                </div>
            </Host>
        );
    }
}
