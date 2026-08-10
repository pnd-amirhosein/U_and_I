import { EuiRadio, EuiRadioGroup } from 'ensemble-ui/react'

export default function RadioPage() {
  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Horizontal separate:</h4>

        <EuiRadioGroup
          styleValue="width:25vw;"
          id="pets"
        >
          <EuiRadio value="dog">Dog</EuiRadio>
          <EuiRadio value="cat">Cat</EuiRadio>
          <EuiRadio value="fox">Fox</EuiRadio>
        </EuiRadioGroup>
      </span>


      <span className="flex">
        <h4 className="title">Horizontal Stacked:</h4>

        <EuiRadioGroup
          styleValue="width:25vw;"
          stacked
          id="pets"
        >
          <EuiRadio value="dog">Dog</EuiRadio>
          <EuiRadio value="cat">Cat</EuiRadio>
          <EuiRadio value="fox">Fox</EuiRadio>
        </EuiRadioGroup>
      </span>


      <span className="flex">
        <h4 className="title">Vertical separate:</h4>

        <EuiRadioGroup
          alignment="vertical"
          styleValue="width:25vw;"
          id="pets"
        >
          <EuiRadio value="dog">Dog</EuiRadio>
          <EuiRadio value="cat">Cat</EuiRadio>
          <EuiRadio value="fox">Fox</EuiRadio>
        </EuiRadioGroup>
      </span>


      <span className="flex">
        <h4 className="title">Vertical Stacked:</h4>

        <EuiRadioGroup
          alignment="vertical"
          styleValue="width:25vw;"
          stacked
          id="pets"
        >
          <EuiRadio value="dog">Dog</EuiRadio>
          <EuiRadio value="cat">Cat</EuiRadio>
          <EuiRadio value="fox">Fox</EuiRadio>
        </EuiRadioGroup>
      </span>

    </div>
  )
}