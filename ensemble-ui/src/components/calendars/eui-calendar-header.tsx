import { Component, EventEmitter, Prop, h, Event, Element, State, Host } from '@stencil/core';
import { CalendarViewEnum } from 'packages/core/utils/helpers/enums'
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { monthNumberToText } from 'packages/core/utils/helpers/date/calendar.utils'
import { EuiDropdownCustomEvent } from 'src/components';

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

    @State() currentDate: Date = new Date();
    @State() currentViewMode: CalendarViewEnum = CalendarViewEnum.year;

    componentWillLoad() {
        this.currentDate = this.selectedDate ?? new Date();
        this.currentViewMode = this.calendarViewMode ?? CalendarViewEnum.year;
    }

    onClickEvent = (date: Date) => {
        this.dayClick?.emit(date);
        this.currentDate = date;
    }

    onViewChange = (event: EuiDropdownCustomEvent<any>) => {
        this.currentViewMode = event.detail.name as CalendarViewEnum;
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        const data = Object.values(CalendarViewEnum).map(x => ({ name: x }));

        console.log(this.currentDate, typeof this.currentDate, 93485798347);

        const year = new Date(this.currentDate).getFullYear();
        const month = monthNumberToText(new Date(this.currentDate).getMonth(), "short");
        const day = new Date(this.currentDate).getDate();


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
                        <eui-calendar-navigator selectedDate={this.currentDate} calendarViewMode={this.currentViewMode} />
                        <eui-dropdown
                            data={data}
                            defaultValue={this.currentViewMode}
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
