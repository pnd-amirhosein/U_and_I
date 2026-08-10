import { EuiCalendar } from 'ensemble-ui/react'

type CalEvent = {
  startDate: Date
  dueDate: Date
  title: string
}

export default function CalendarPage() {
  const events: CalEvent[] = [
    {
      startDate: new Date('2026-01-11 08:53:00'),
      dueDate: new Date('2026-01-11 10:53:00'),
      title: 'First test!',
    },
    {
      startDate: new Date('2026-01-11 09:20:00'),
      dueDate: new Date('2026-01-11 15:20:00'),
      title: 'Second test!',
    },
    {
      startDate: new Date('2026-01-11 09:20:00'),
      dueDate: new Date('2026-01-11 15:20:00'),
      title: 'Fourth test!',
    },
    {
      startDate: new Date('2026-01-11 16:00:00'),
      dueDate: new Date('2026-01-11 18:20:00'),
      title: 'Third test!',
    },
    {
      startDate: new Date('2026-01-11 18:00:00'),
      dueDate: new Date('2026-01-11 18:20:00'),
      title: 'Third test one!',
    },
    {
      startDate: new Date('2026-01-12 16:00:00'),
      dueDate: new Date('2026-01-12 18:20:00'),
      title: 'Fifth test!',
    },
    {
      startDate: new Date('2026-01-12 19:00:00'),
      dueDate: new Date('2026-01-13 10:20:00'),
      title: 'Sixth test!',
    },
    {
      startDate: new Date('2026-06-13 19:00:00'),
      dueDate: new Date('2026-06-13 20:20:00'),
      title: 'seventh test!',
    },
  ]

  return (
    <div className="doc">
      <span className="flex flex-col">
        <h2 className="title">calendar</h2>

        <span
          className="calendar-wrapper"
          style={{ width: '80vw' }}
        >
          <EuiCalendar
            selectedDate={new Date("2026-06-14 19:00:00")}
            calendarEvents={events}
            holidayEventType="both"
            calendarViewMode="month"
          />
        </span>
      </span>
    </div>
  )
}