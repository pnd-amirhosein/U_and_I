import { EuiProgressbar } from 'ensemble-ui/react'

export default function ProgressbarPage() {
  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Progressbar - sm:</h4>

        <EuiProgressbar
          styleValue="width:25vw;"
          size="sm"
          value={0.5}
        />
      </span>

      <span className="flex">
        <h4 className="title">Progressbar - md:</h4>

        <EuiProgressbar
          styleValue="width:25vw;"
          size="md"
          value={0.5}
        />
      </span>

      <span className="flex">
        <h4 className="title">Progressbar - lg:</h4>

        <EuiProgressbar
          styleValue="width:25vw;"
          size="lg"
          value={0.5}
        />
      </span>

    </div>
  )
}