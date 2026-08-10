import { useState } from 'react'
import { EuiButton, EuiStepper } from 'ensemble-ui/react'

export default function StepperPage() {
  const steps = [
    'Select flight',
    'Passengers',
    'Travel info',
    'Payment method',
    'Finalize',
  ]

  const [currentStep, setCurrentStep] = useState(0)

  const change = (value: number) => {
    let next = currentStep + value

    if (next > steps.length) {
      next = steps.length
    } else if (next < 0) {
      next = 0
    }

    setCurrentStep(next)
  }

  const selected = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <div className="doc">

      <span className="flex flex-col">
        <h4 className="title">Stepper - horizontal:</h4>

        <span className="stepper-wrapper">
          <EuiStepper
            onStepSelect={(event) => selected(event.detail)}
            steps={steps}
            currentStep={currentStep}
          />
        </span>
      </span>

      <span className="flex flex-col">
        <h4 className="title">Stepper - vertical:</h4>

        <span className="stepper-wrapper vertical">
          <EuiStepper
            onStepSelect={(event) => selected(event.detail)}
            orientation="vertical"
            steps={steps}
            currentStep={currentStep}
          />
        </span>

        <span className="flex justify-between w-80">
          <EuiButton
            onClick={() => change(-1)}
            mode="outline"
            size="sm"
            variant="info"
          >
            Previous
          </EuiButton>

          <EuiButton
            onClick={() => change(1)}
            mode="outline"
            size="sm"
            variant="info"
          >
            Next
          </EuiButton>
        </span>
      </span>

    </div>
  )
}