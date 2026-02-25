export type Alert = {
    message: string,
    type: "danger" | "success"
}

export type Validation = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean | string;
};

export type Holiday = {
    month: number; // 0-indexed
    day: number;   // 1-based
    name: string;
    isHoliday?: boolean;
}

export type HolidayEventType = "none" | "international" | "persian" | "both"

export type CalendarEventType = {
    startDate: Date,
    dueDate: Date
    title: string
}