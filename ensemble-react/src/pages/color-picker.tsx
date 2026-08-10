import { EuiColorPicker } from 'ensemble-ui/react'

export default function ColorPickerPage() {
  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Color picker - compact:</h4>
        <EuiColorPicker />
      </span>

      <span className="flex">
        <h4 className="title">Color picker - standard:</h4>
        <EuiColorPicker mode="standard" />
      </span>

      <span className="flex">
        <h4 className="title">Color picker - full:</h4>
        <EuiColorPicker mode="full" />
      </span>

    </div>
  )
}