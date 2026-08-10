import { EuiStat } from 'ensemble-ui/react'

export default function StatPage() {
  const value = {
    'Amir H. Mardani': 'FSD',
    'months of experience': '100<',
    'Projects': '+17',
    'Jobs': '+10',
  }

  return (
    <div className="doc">

      <span className="flex flex-col">
        <h4 className="title">Stat - horizontal:</h4>

        <span className="stepper-wrapper">
          <EuiStat data={value} />
        </span>
      </span>

      <span className="flex flex-col">
        <h4 className="title">Stat - vertical:</h4>

        <span className="stepper-wrapper">
          <EuiStat
            orientation="vertical"
            data={value}
          />
        </span>
      </span>

    </div>
  )
}