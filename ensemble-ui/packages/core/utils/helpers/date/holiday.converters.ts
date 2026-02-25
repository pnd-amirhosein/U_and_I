// holiday.converters.ts

import moment from "jalali-moment";
import { Holiday } from "../types";

export interface GregorianHoliday extends Holiday {
    gMonth: number;
    gDay: number;
}

export function convertJalaliToGregorian(
    holiday: Holiday,
    year: number
): GregorianHoliday {
    const g = moment
        .from(
            `${year}/${holiday.month + 1}/${holiday.day}`,
            "fa",
            "YYYY/MM/DD"
        )
        .locale("en");

    return {
        ...holiday,
        gMonth: g.month(),
        gDay: g.date(),
    };
}
