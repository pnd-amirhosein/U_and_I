import { Component, Prop, h, Host, Element } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { HolidayEventType } from 'packages/core/utils/helpers/types'
import { monthNumberToText } from 'packages/core/utils/helpers/date/calendar.utils'

@Component({
    tag: 'eui-year',
    styleUrl: "../calendars.scss",
    shadow: false,
})
export class EUIYearView {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() year: number | string = 2000;
    @Prop({ attribute: "holidayEventType" }) holidayEventType: HolidayEventType = "none";

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        const list = [];

        for (let i = 0; i < 12; i++) {
            list.push(<span class="month-box">
                <span>{monthNumberToText(i)}</span>
                <eui-month-card month={i} year={+this.year} holidayEventType={this.holidayEventType} />
            </span>);
        }

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        "eui--yrv": true
                    }}
                >
                    {list}
                </div>
            </Host>
        );
    }
}