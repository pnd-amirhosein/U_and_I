import { CalendarEventType, CalendarEventPackType } from '../types';

export function mergeEventsIntoPacks(events: CalendarEventType[]): CalendarEventPackType[] {
    if (!events.length) return [];

    const sorted = [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    const packs: CalendarEventPackType[] = [];

    for (const e of sorted) {
        const lastPack = packs[packs.length - 1];

        if (lastPack && lastPack.dueDate.getTime() >= e.startDate.getTime()) {
            // merge into last pack
            lastPack.dueDate = new Date(Math.max(lastPack.dueDate.getTime(), e.dueDate.getTime()));
            lastPack.calendarEvents.push(e);
        } else {
            // start new pack
            packs.push({
                startDate: new Date(e.startDate),
                dueDate: new Date(e.dueDate),
                calendarEvents: [e],
            });
        }
    }

    return packs;
}