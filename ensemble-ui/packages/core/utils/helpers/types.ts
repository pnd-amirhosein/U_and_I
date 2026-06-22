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

export type CalendarEventPackType = {
    startDate: Date;
    dueDate: Date;
    calendarEvents: CalendarEventType[];
};

export interface NavigatorInfo {
    min: number;
    max: number;
    value: number;
    text: string;
}

export interface FeedData {
    Title: string,
    description: string
    icon?: string,
    iconColor?: string,
    avatar?: string
    date?: Date | string
    dueDate?: Date | string
    jobType?: string
    careerData?: CareerData[]
}

export interface CareerData {
    Title: string,
    start: Date | string,
    end: Date | string
}