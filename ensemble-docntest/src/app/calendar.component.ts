import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex flex-col">
            <label for="month">choose Year:</label>
            <eui-input [value]="year" min="1950" max="2100" type="number" (change)="changedYear($event)" styleValue="width:25vw;" placeHolder="simple input"/>
            <label for="month">choose Month:</label>
            <eui-input [value]="month" min="0" max="11" type="number" (change)="changed($event)" styleValue="width:25vw;" placeHolder="simple input"/>
            <h4 class="title">calendar - month card:</h4>
            <span class="calendar-wrapper">
                <eui-month-card holidayEventType="both" [year]="year" [month]="month"/> 
            </span>
            <h4 class="title">calendar - year box:</h4>
            <span class="calendar-wrapper">
                <eui-year holidayEventType="both" [year]="year"/> 
            </span>
            <h4 class="title">calendar - month box: month-{{month}}</h4>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-month-view [calendarEvents]="events" holidayEventType="both" [year]="year" [month]="month"/> 
            </span>
            <h4 class="title">calendar - week</h4>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-week-view [calendarEvents]="events" holidayEventType="both" [year]="year" [month]="month" week="2"/> 
            </span>
            <h4 class="title">calendar - day</h4>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-day-view [calendarEvents]="events" holidayEventType="both" [year]="year" [month]="month" week="2" day="12"/> 
            </span>
            <h4 class="title">calendar - header</h4>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-calendar-header selectedDate="2026-06-13 19:00:00" [calendarEvents]="events" holidayEventType="both" calendarViewMode="year"/> 
            </span>
            <!-- <h4 class="title">calendar - navigator</h4>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-calendar-navigator selectedDate="2026-06-13 19:00:00" calendarViewMode="week"/> 
            </span> -->
        </span>
    </div>
    `
})
export class CalendarComponent {

    month: number = 5;
    year: number = 2026;
    events: calEvent[] = [
        { startDate: new Date("2026-01-11 08:53:00"), dueDate: new Date("2026-01-11 10:53:00"), title: "First test!" },
        { startDate: new Date("2026-01-11 09:20:00"), dueDate: new Date("2026-01-11 15:20:00"), title: "Second test!" },
        { startDate: new Date("2026-01-11 09:20:00"), dueDate: new Date("2026-01-11 15:20:00"), title: "Fourth test!" },
        { startDate: new Date("2026-01-11 16:00:00"), dueDate: new Date("2026-01-11 18:20:00"), title: "Third test!" },
        { startDate: new Date("2026-01-11 18:00:00"), dueDate: new Date("2026-01-11 18:20:00"), title: "Third test one!" },
        { startDate: new Date("2026-01-12 16:00:00"), dueDate: new Date("2026-01-12 18:20:00"), title: "Fifth test!" },
        { startDate: new Date("2026-01-12 19:00:00"), dueDate: new Date("2026-01-13 10:20:00"), title: "Sixth test!" },
        { startDate: new Date("2026-06-13 19:00:00"), dueDate: new Date("2026-06-13 20:20:00"), title: "seventh test!" },
    ]


    public changed(e: any) {
        this.month = +(e.target as HTMLInputElement).value;
    }
    public changedYear(e: any) {
        this.year = +(e.target as HTMLInputElement).value;
    }



}

type calEvent = {
    startDate: Date,
    dueDate: Date,
    title: string
}