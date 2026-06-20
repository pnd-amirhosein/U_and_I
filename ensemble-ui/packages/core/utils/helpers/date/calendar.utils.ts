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

export function monthNumberToText(month: number, locale = "en-US", format: "long" | "short" | "narrow" = "long") {
    return new Date(2000, month).toLocaleString(locale, { month: format });
}

export function formatHour12(date: Date): string {
    const hours24 = date.getHours(); // 0–23

    const period = hours24 >= 12 ? 'pm' : 'am';
    const hours12 = hours24 % 12 || 12; // converts 0 → 12

    const paddedHour = hours12.toString().padStart(2, '0');

    return `${paddedHour}${period}`;
}

export function weeksInMonth(date: Date) {

    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay =
        new Date(year, month, 1).getDay();

    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    return Math.ceil(
        (firstDay + daysInMonth) / 7
    );
}

export function daysInMonth(date: Date) {

    return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
}

export function getWeekOfMonth(date: Date) {

    const firstDayOfMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    );

    return Math.ceil(
        (date.getDate() + firstDayOfMonth.getDay()) / 7
    );
}

export function getCurrentWeekIndex(date: Date, correctGridInput?: Date[]): number {

    let correctGrid;

    if (correctGridInput)
        correctGrid = correctGridInput
    else {

        const grid = getCalendarDays(date.getFullYear(), date.getMonth());
        correctGrid = removeExtraWeek(grid, date.getMonth());
    }

    const weekAnchor = correctGrid.filter((_, index) => index % 7 === 0);

    const index = weekAnchor.findIndex((_, index) => date <= weekAnchor[index + 1])

    return index;
}