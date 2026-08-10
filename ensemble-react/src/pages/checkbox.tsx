import { useState } from 'react'
import { EuiCheckbox } from 'ensemble-ui/react'

export default function CheckboxPage() {
  const [vals, setVals] = useState([
    'false', 'false', 'false',
    'null', 'null', 'null',
    'null', 'null', 'null',
    'null', 'null', 'null',
    'null', 'null', 'null',
    'null', 'null', 'null',
    'null',
  ])

  const updateValue = (index: number, value: unknown) => {
    setVals(current => {
      const next = [...current]
      next[index] = String(value)
      return next
    })
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Classic checkbox (null,true)</h4>

        <EuiCheckbox
          onValueChange={event => updateValue(9, event.detail)}
          states={["null","true"]}
          size="sm"
        />
        <span className="valued">{vals[9]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(10, event.detail)}
          states={["null","true"]}
          size="md"
        />
        <span className="valued">{vals[10]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(11, event.detail)}
          states={["null","true"]}
          size="lg"
        />
        <span className="valued">{vals[11]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(12, event.detail)}
          states={["null","true"]}
          size="lg"
          mode="outline"
        />
        <span className="valued">{vals[12]}</span>
      </span>


      <span className="flex">
        <h4 className="title">Force to choose: false, true</h4>

        <EuiCheckbox
          onValueChange={event => updateValue(0, event.detail)}
          states={["false","true"]}
          size="sm"
          value="false"
        />
        <span className="valued">{vals[0]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(1, event.detail)}
          states={["false","true"]}
          size="md"
          value="false"
        />
        <span className="valued">{vals[1]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(2, event.detail)}
          states={["false","true"]}
          size="lg"
          value="false"
        />
        <span className="valued">{vals[2]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(13, event.detail)}
          states={["false","true"]}
          size="lg"
          mode="outline"
          value="false"
        />
        <span className="valued">{vals[13]}</span>
      </span>


      <span className="flex">
        <h4 className="title">Choose but optional: (null,false,true)</h4>

        <EuiCheckbox
          onValueChange={event => updateValue(3, event.detail)}
          states={["null","false","true"]}
          size="sm"
        />
        <span className="valued">{vals[3]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(4, event.detail)}
          states={["null","false","true"]}
          size="md"
        />
        <span className="valued">{vals[4]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(5, event.detail)}
          states={["null","false","true"]}
          size="lg"
        />
        <span className="valued">{vals[5]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(14, event.detail)}
          states={["null","false","true"]}
          size="lg"
          mode="outline"
        />
        <span className="valued">{vals[14]}</span>
      </span>


      <span className="flex">
        <h4 className="title">
          Full options: (null , false , partial , true)
        </h4>

        <EuiCheckbox
          onValueChange={event => updateValue(6, event.detail)}
          states={["null","false","partial","true"]}
          size="sm"
        />
        <span className="valued">{vals[6]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(7, event.detail)}
          states={["null","false","partial","true"]}
          size="md"
        />
        <span className="valued">{vals[7]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(8, event.detail)}
          states={["null","false","partial","true"]}
          size="lg"
        />
        <span className="valued">{vals[8]}</span>

        <EuiCheckbox
          onValueChange={event => updateValue(15, event.detail)}
          states={["null","false","partial","true"]}
          size="lg"
          mode="outline"
        />
        <span className="valued">{vals[15]}</span>
      </span>

    </div>
  )
}