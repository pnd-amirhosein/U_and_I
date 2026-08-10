import { EuiInput } from 'ensemble-ui/react'

export default function InputPage() {
  const sell = '1'

  const checkMate = (value: unknown): boolean => {
    return !value
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Simple Input</h4>

        <EuiInput
          styleValue="width:25vw;"
          nativeAttrs={{ "placeHolder": "simple input" }}
        />
      </span>

      <span className="flex">
        <h4 className="title">Simple numeric Input</h4>

        <EuiInput
          styleValue="width:25vw;"
          type="number"
          nativeAttrs={{ "placeHolder": "simple input" }}
        />
      </span>

      <span className="flex">
        <h4 className="title">Numeric Input with min max (2,8)</h4>

        <EuiInput
          styleValue="width:25vw;"
          min={2}
          max={8}
          type="number"
          nativeAttrs={{ "placeHolder": "simple input" }}
        />
      </span>

      <span className="flex">
        <h4 className="title">
          Input with validation (maxlength:10)
        </h4>

        <EuiInput
          styleValue="width:25vw;"
          validation={{ maxLength: 10 }}
          type="text"
        />
      </span>

      <span className="flex">
        <h4 className="title">Success message</h4>

        <EuiInput
          styleValue="width:25vw;"
          type="text"
          validation={{
            custom: checkMate(sell),
          }}
          alert={{
            message: 'There is a success!',
            type: 'success',
          }}
        />
      </span>

      <span className="flex">
        <h4 className="title">Password input</h4>

        <EuiInput
          styleValue="width:25vw;"
          nativeAttrs={{ "placeHolder": "enter password" }}
          type="password"
        />
      </span>

    </div>
  )
}