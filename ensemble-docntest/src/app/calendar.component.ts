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
            <h4 class="title">calendar - year box:{{month}}</h4>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-month-view [calendarEvents]="events" holidayEventType="both" [year]="year" [month]="month"/> 
            </span>
            <span class="calendar-wrapper" style="width: 60vw;">
                <eui-week-view [calendarEvents]="events" holidayEventType="both" [year]="year" [month]="month" week="2"/> 
            </span>
        </span>
    </div>
    `
})
export class CalendarComponent {

    month: number = 0;
    year: number = 2026;
    events: calEvent[] = [
        { startDate: new Date("2025-10-10 13:00:00"), dueDate: new Date("2025-10-10 15:00:00"), title: "Test date from test project!" },
        { startDate: new Date("2025-10-11 12:01:00"), dueDate: new Date("2025-10-11 14:01:00"), title: "Test date from test project!" },
        { startDate: new Date("2025-10-12 12:00:00"), dueDate: new Date("2025-10-12 14:00:00"), title: "Test date from test project!" },
        { startDate: new Date("2025-11-11 08:10:00"), dueDate: new Date("2025-11-13 13:10:00"), title: "Test date from test project!" },
        { startDate: new Date("2025-12-11 19:00:00"), dueDate: new Date("2025-12-11 21:00:00"), title: "Test date from test project!" },
        { startDate: new Date("2025-09-09 11:08:00"), dueDate: new Date("2025-12-09 13:08:00"), title: "Test date from test project!" },
        { startDate: new Date("2025-10-08 21:53:00"), dueDate: new Date("2025-10-08 22:53:00"), title: "Test date from test project!" },
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