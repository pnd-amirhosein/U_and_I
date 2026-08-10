import { useState } from 'react'
import { EuiSlider } from 'ensemble-ui/react'

export default function SliderPage() {
  const [values, setValues] = useState([0.5, 0.5, 0.5])

  const updateValue = (index: number, value: number) => {
    setValues(current => {
      const next = [...current]
      next[index] = value
      return next
    })
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Slider - sm:</h4>

        <EuiSlider
          styleValue="width:25vw;"
          size="sm"
          value={0.5}
          onValueChange={event => updateValue(0, event.detail)}
        />

        <span style={{ width: '50px' }}>
          {values[0]}
        </span>
      </span>

      <span className="flex">
        <h4 className="title">Slider - md:</h4>

        <EuiSlider
          styleValue="width:25vw;"
          size="md"
          value={0.5}
          onValueChange={event => updateValue(1, event.detail)}
        />

        <span style={{ width: '50px' }}>
          {values[1]}
        </span>
      </span>

      <span className="flex">
        <h4 className="title">Slider - lg:</h4>

        <EuiSlider
          styleValue="width:25vw;"
          size="lg"
          value={0.5}
          onValueChange={event => updateValue(2, event.detail)}
        />

        <span style={{ width: '50px' }}>
          {values[2]}
        </span>
      </span>

    </div>
  )
}