import { EuiDatepicker } from 'ensemble-ui/react'

export default function DatepickerPage() {
  const date = new Date()

  const onDateSelected = (event: CustomEvent) => {
    const selectedDate = event.detail

    console.log('Date selected from React!', selectedDate)
  }

  return (
    <div
      className="doc"
      style={{ height: '30vh' }}
    >
      <span className="flex">
        <h4 className="title">Basic datepicker</h4>

        <EuiDatepicker
          date={date}
          onDateChanged={onDateSelected}
          styleValue="width: 25vw;"
        />
      </span>
    </div>
  )
}