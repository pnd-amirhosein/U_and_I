import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex flex-col">
            <h2 class="title">calendar</h2>
            <span class="calendar-wrapper" style="width: 80vw;">
                <eui-calendar selectedDate="2026-06-13 19:00:00" [calendarEvents]="events" holidayEventType="both" calendarViewMode="month"/> 
            </span>
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