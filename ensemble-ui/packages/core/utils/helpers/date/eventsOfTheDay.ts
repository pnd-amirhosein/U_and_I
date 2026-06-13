import { CalendarEventType } from '../types';

export function getEventsOfTheDay(events: CalendarEventType[], date: Date) {
    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0); // start of the day

    const dayEnd = new Date(date);
    dayEnd.setHours(23, 59, 59, 999); // end of the day

    // Include events that overlap the day
    return events.filter(e => e.startDate <= dayEnd && e.dueDate >= dayStart);
}