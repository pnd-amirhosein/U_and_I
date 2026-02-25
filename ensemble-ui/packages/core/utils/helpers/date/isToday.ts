export const isToday = (d: Date) => {
    const t = new Date();
    return d.toDateString() === t.toDateString();
};