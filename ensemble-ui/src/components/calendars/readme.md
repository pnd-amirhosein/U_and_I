# eui-month-card



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description | Type                                                                                               | Default                 |
| ------------------ | ------------------ | ----------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| `calendarEvents`   | `calendarevents`   |             | `CalendarEventType[]`                                                                              | `[]`                    |
| `calendarViewMode` | `calendarviewmode` |             | `CalendarViewEnum.day \| CalendarViewEnum.month \| CalendarViewEnum.week \| CalendarViewEnum.year` | `CalendarViewEnum.year` |
| `holidayEventType` | `holidayeventtype` |             | `HolidayEventType`                                                                                 | `"none"`                |
| `interactive`      | `interactive`      |             | `boolean`                                                                                          | `true`                  |
| `selectedDate`     | `selecteddate`     |             | `Date`                                                                                             | `new Date()`            |
| `styleValue`       | `stylevalue`       |             | `string \| undefined`                                                                              | `undefined`             |


## Dependencies

### Depends on

- [eui-calendar-header](eui-calendar-body)
- [eui-year](eui-calendar-body)
- [eui-month-view](eui-calendar-body)
- [eui-week-view](eui-calendar-body)
- [eui-day-view](eui-calendar-body)

### Graph
```mermaid
graph TD;
  eui-calendar --> eui-calendar-header
  eui-calendar --> eui-year
  eui-calendar --> eui-month-view
  eui-calendar --> eui-week-view
  eui-calendar --> eui-day-view
  eui-calendar-header --> eui-calendar-navigator
  eui-calendar-header --> eui-dropdown
  eui-calendar-navigator --> eui-icon
  eui-dropdown --> eui-icon
  eui-dropdown --> eui-input
  eui-input --> eui-icon
  eui-year --> eui-month-card
  eui-day-view --> eui-month-card
  style eui-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
