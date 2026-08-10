import { EuiTextarea } from 'ensemble-ui/react'

export default function TextareaPage() {
  return (
    <div className="doc">
      <span className="flex">
        <h4 className="title">Simple Input</h4>

        <EuiTextarea
          styleValue="width:25vw;"
          nativeAttrs={{ "placeHolder": "simple input" }}
        />
      </span>
    </div>
  )
}