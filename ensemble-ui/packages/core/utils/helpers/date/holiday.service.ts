// holiday.service.ts

import { Holiday } from "../types";
import { HolidayEventType } from "../types";
import { fixedHolidays, jalaliHolidays } from "./holiday.data";
import { convertJalaliToGregorian } from "./holiday.converters";

export class HolidayService {
    static getHolidaysForMonth(
        year: number,
        month: number,
        type: HolidayEventType = "none"
    ): Holiday[] {
        if (type === "none") return [];

        const result: Holiday[] = [];

        if (type === "international" || type === "both") {

            result.push(
                ...fixedHolidays.filter(h => h.month === month)
            );
        }

        if (type === "persian" || type === "both") {
            const converted = jalaliHolidays
                .map(h => convertJalaliToGregorian(h, year))
                .filter(h => h.gMonth === month)
                .map(h => ({
                    ...h,
                    month: h.gMonth,
                    day: h.gDay,
                }));

            result.push(...converted);
        }

        return result
            .filter(
                (h, i, arr) =>
                    arr.findIndex(x =>
                        x.day === h.day &&
                        x.month === h.month &&
                        x.name === h.name
                    ) === i
            )
            .sort((a, b) => a.day - b.day);
    }
}
