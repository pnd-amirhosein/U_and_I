import { Component, EventEmitter, Prop, h, Event, Element, State } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { HolidayEventType } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-decade-card',
    shadow: false,
    styleUrl: "../calendars.scss"
})
export class EUIDecadeCard {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() nativeAttrs?: Record<string, any>;
    @Prop({ attribute: "selectedDate" }) selectedDate?: Date;
    @Prop({ attribute: "startingYear" }) startingYear?: number;
    @Prop() interactive: boolean = true;
    @Prop({ attribute: "holidayEventType" }) holidayEventType: HolidayEventType = "none";
    @Prop() showHeader: boolean = true

    @Event() yearClick?: EventEmitter<Date>;

    @State() currentDate: Date = new Date();

    componentWillLoad() {
        this.currentDate = this.selectedDate ?? new Date();
    }

    onClickEvent = (year: number) => {
        this.currentDate = new Date(year, this.currentDate.getMonth(), this.currentDate.getDate());
        this.yearClick?.emit(this.currentDate);
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => ![
                'class',
                'styleValue',
                'nativeAttrs',
                'selectedDate',
                'startingYear',
                'interactive',
                'holidayEventType',
                'showHeader',
                'yearClick'
            ].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);


        const year = this.currentDate.getFullYear();
        const decadeStart = this.startingYear ?? Math.floor(year / 10) * 10;
        const decade = Array.from(
            { length: 12 },
            (_, i) => decadeStart - 1 + i
        );

        return (
            <div
                style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                {...attrs} {...this.nativeAttrs} class="eui--dcdcard">

                <div class="decade-grid">
                    {decade.map(year => {
                        const isCurrentYear = this.currentDate.getFullYear() === year;
                        const prepostYear = Math.floor(decadeStart / 10) !== Math.floor(year / 10);

                        return (
                            <div
                                class={{
                                    'year-cell': true,
                                    'is-current': isCurrentYear,
                                    'is-selected': false,
                                    'is-next': prepostYear
                                }}
                                onClick={() => this.onClickEvent(year)}
                            >
                                {year}
                            </div>

                        );
                    })}
                </div>
            </div >
        );
    }
}
