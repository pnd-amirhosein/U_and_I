import { Component, Prop, h, Host, Element } from '@stencil/core';
import { formatMonthYear, getRelativeDate } from 'packages/core/utils/helpers/date/calendar.utils';
import { FeedMode } from 'packages/core/utils/helpers/enums';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { FeedData } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-feed',
    styleUrl: "./feed.scss",
    shadow: false,
})
export class EUIFeed {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() mode: FeedMode = FeedMode.timeLine
    @Prop() data: FeedData[] = [{ Title: "placeholder", description: "A placeholder description for" }]

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['data', 'mode', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        fd: true
                    }}
                >
                    {this.data && this.data.map(feedItem => {
                        switch (this.mode) {
                            case FeedMode.timeLine:
                                return (
                                    <div class="fd--time-line">
                                        <div class="dot"></div>
                                        <div class="description">{feedItem.description}</div>
                                        <div class="title">{feedItem.Title}</div>
                                    </div>
                                )
                            case FeedMode.events:
                                return (
                                    <div class="fd--events">
                                        <div class="icon" style={{ "backgroundColor": feedItem.iconColor }}>
                                            <eui-icon
                                                type="mini"
                                                name={feedItem.icon ?? "x-mark"}
                                            />
                                        </div>
                                        <div class="description">{feedItem.description}</div>
                                        <div class="title">{feedItem.Title}</div>
                                    </div>
                                )
                            case FeedMode.comment:
                                const date = (new Date(feedItem.date ?? "1900-01-01"));
                                return (

                                    <div class="fd--comment">
                                        <div class="avatar" style={{ "background-image": "url(" + feedItem.avatar + ")" }}></div>
                                        <div class="content">

                                            <div class="Title-bar">
                                                <div class="pre">Comment by</div>
                                                <div class="Title">{feedItem.Title}</div>
                                            </div>
                                            <div class="date" title={date.toDateString()}>{getRelativeDate(date)} ago</div>
                                            <div class="description">{feedItem.description}</div>
                                        </div>
                                    </div>
                                )
                            case FeedMode.career:
                                const startDate = (new Date(feedItem.date ?? "1900-01-01"));
                                const dueDate = (new Date(feedItem.dueDate ?? "1901-01-01"));
                                return (
                                    <div class="fd--career">
                                        <div class="avatar" style={{ "background-image": "url(" + feedItem.avatar + ")" }}></div>
                                        <div class="main-data">
                                            <div class="title">{feedItem.Title}</div>
                                            <div class="time-length">{getRelativeDate(startDate, dueDate)}</div>
                                            <div class="time-pins">
                                                <div class="time-start">{formatMonthYear(startDate)}</div>
                                                <div class="separator">-</div>
                                                <div class="time-end">{formatMonthYear(dueDate)}</div>
                                                <div class="separator">-</div>
                                                <div class="job-type">{feedItem.jobType}</div>
                                            </div>
                                            <div class="time-length"></div>
                                        </div>
                                        {feedItem.careerData && (feedItem.careerData.map(career => (
                                            <div class="career-row">
                                                <span class="dot"></span>
                                                <span class="data-row">
                                                    <span class="career-title">{career.Title}</span>
                                                    <span class="for">for</span>
                                                    <span class="time">{getRelativeDate(career.start, career.end)}</span>
                                                </span>
                                            </div>
                                        )))}
                                    </div>
                                )

                            default:
                                break;
                        }
                    })}
                </div>
            </Host>
        );
    }
}