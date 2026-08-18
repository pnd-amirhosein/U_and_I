import { useState } from 'react'
import { EuiSlider } from 'ensemble-ui/react'

export default function FontPage() {
  const [stretch, setStretch] = useState(75)
  const [weight, setWeight] = useState(500)

  const [stretchPersian, setStretchPersian] = useState(75)
  const [weightPersian, setWeightPersian] = useState(500)

  const weightCalc = (value: number) => {
    setWeight(100 + value * 800)
  }

  const stretchCalc = (value: number) => {
    setStretch(75 + value * 50)
  }

  const weightCalcPersian = (value: number) => {
    setWeightPersian(100 + value * 850)
  }

  const stretchCalcPersian = (value: number) => {
    setStretchPersian(50 + value * 100)
  }

  return (
    <div className="font-center flex gap-2">

      <div className="english-text flex gap-2 flex-col justify-between">
        <h1
          className="text flex justify-center"
          style={{
            fontStretch: `${stretch}%`,
            fontWeight: weight,
          }}
        >
          EnsembleUI, by Ilecy!
        </h1>

        <div className="flex flex-col gap-2">
          <div className="tool">
            <div className="flex justify-between">
              <div className="weight">Weight:</div>
              <div className="weight">{weight}</div>
            </div>

            <EuiSlider
              styleValue="width:40vw;"
              size="md"
              value={0.5}
              onChange={event => weightCalc(event.detail)}
            />
          </div>

          <div className="tool">
            <div className="flex justify-between">
              <div className="weight">stretch:</div>
              <div className="weight">{stretch}</div>
            </div>

            <EuiSlider
              styleValue="width:40vw;"
              size="md"
              value={0.5}
              onChange={event => stretchCalc(event.detail)}
            />
          </div>
        </div>
      </div>


      <div className="persian-text flex gap-2 flex-col justify-between">
        <h1
          className="text rtl flex justify-center"
          style={{
            fontStretch: `${stretchPersian}%`,
            fontWeight: weightPersian,
          }}
        >
          انسمبل، توسط ایلسی!
        </h1>

        <div className="flex flex-col gap-2">
          <div className="tool">
            <div className="flex justify-between">
              <div className="weight">Weight:</div>
              <div className="weight">{weightPersian}</div>
            </div>

            <EuiSlider
              styleValue="width:40vw;"
              size="md"
              value={0.5}
              onChange={event => weightCalcPersian(event.detail)}
            />
          </div>

          <div className="tool">
            <div className="flex justify-between">
              <div className="weight">stretch:</div>
              <div className="weight">{stretchPersian}</div>
            </div>

            <EuiSlider
              styleValue="width:40vw;"
              size="md"
              value={0.5}
              onChange={event => stretchCalcPersian(event.detail)}
            />
          </div>
        </div>
      </div>

    </div>
  )
}