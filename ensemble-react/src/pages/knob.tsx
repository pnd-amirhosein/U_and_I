import { useState } from 'react'
import { EuiButton, EuiKnob } from 'ensemble-ui/react'

export default function KnobPage() {
  const [counter, setCounter] = useState(0)

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)

  const changeValue1 = () => {
    const values = [10, 20, 30, 70, 90]

    const nextCounter =
      counter + 1 > values.length - 1
        ? 0
        : counter + 1

    setCounter(nextCounter)
    setValue1(values[nextCounter])
  }

  const changeValue2 = () => {
    const values = [12, 20, 30, 45]

    const nextCounter =
      counter + 1 > values.length - 1
        ? 0
        : counter + 1

    setCounter(nextCounter)
    setValue2(values[nextCounter])
  }

  const changeValue3 = () => {
    const values = [10, 20, 30, 70, 90]

    const nextCounter =
      counter + 1 > values.length - 1
        ? 0
        : counter + 1

    setCounter(nextCounter)
    setValue3(values[nextCounter])
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Simple:</h4>

        <EuiKnob
          style={{ width: '100px' }}
          value={value1}
        />

        <EuiButton
          onClick={changeValue1}
          size="md"
          variant="success"
        >
          Knob
        </EuiButton>
      </span>


      <span className="flex">
        <h4 className="title">Numeric:</h4>

        <EuiKnob
          style={{ width: '100px' }}
          value={value2}
          min={10}
          max={50}
        />

        <EuiButton
          onClick={changeValue2}
          size="md"
          variant="success"
        >
          Knob
        </EuiButton>
      </span>


      <span className="flex">
        <h4 className="title">Percent:</h4>

        <EuiKnob
          style={{ width: '100px' }}
          value={value3}
          isPercent={true}
        />

        <EuiButton
          onClick={changeValue3}
          size="md"
          variant="success"
        >
          Knob
        </EuiButton>
      </span>

    </div>
  )
}