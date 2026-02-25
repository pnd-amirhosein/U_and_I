// calendar.utils.ts

export function getCalendarDays(year: number, month: number): Date[] {
    const days: Date[] = [];

    const firstOfMonth = new Date(year, month, 1);
    const startDay = firstOfMonth.getDay();

    const startDate = new Date(firstOfMonth);
    startDate.setDate(firstOfMonth.getDate() - startDay);

    for (let i = 0; i < 42; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        days.push(d);
    }

    return days;
}

export function removeExtraWeek(days: Date[], month: number): Date[] {
    const lastWeek = days.slice(-7);

    const allOutside =
        lastWeek.every(d => d.getMonth() !== month);

    return allOutside ? days.slice(0, -7) : days;
}

export function monthNumberToText(month: number, locale = "en-US") {
    return new Date(2000, month).toLocaleString(locale, { month: "long" });
}

export function formatHour12(date: Date): string {
    const hours24 = date.getHours(); // 0–23

    const period = hours24 >= 12 ? 'pm' : 'am';
    const hours12 = hours24 % 12 || 12; // converts 0 → 12

    const paddedHour = hours12.toString().padStart(2, '0');

    return `${paddedHour}${period}`;
}