import { EuiBadge, EuiIcon } from 'ensemble-ui/react'

export default function BadgePage() {
  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">blank / primary</h4>
        <EuiBadge type="blank" color="primary" />
      </span>

      <span className="flex">
        <h4 className="title">blank / success</h4>
        <EuiBadge type="blank" color="success" />
      </span>

      <span className="flex">
        <h4 className="title">blank / warning</h4>
        <EuiBadge type="blank" color="warning" />
      </span>

      <span className="flex">
        <h4 className="title">blank / danger</h4>
        <EuiBadge type="blank" color="danger" />
      </span>

      <span className="flex">
        <h4 className="title">blank / outline</h4>
        <EuiBadge type="blank" color="outline" />
      </span>

      <span className="flex">
        <h4 className="title">blank / outline-filled</h4>
        <EuiBadge type="blank" color="outline-filled" />
      </span>

      <span className="flex">
        <h4 className="title">blank / pending</h4>
        <EuiBadge type="blank" color="pending" />
      </span>


      <span className="flex">
        <h4 className="title">number / primary</h4>
        <EuiBadge type="number" color="primary">1</EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">number / success</h4>
        <EuiBadge type="number" color="success">1</EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">number / warning</h4>
        <EuiBadge type="number" color="warning">1</EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">number / danger</h4>
        <EuiBadge type="number" color="danger">1</EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">number / outline</h4>
        <EuiBadge type="number" color="outline">1</EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">number / outline-filled</h4>
        <EuiBadge type="number" color="outline-filled">1</EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">number / pending</h4>
        <EuiBadge type="number" color="pending">1</EuiBadge>
      </span>


      <span className="flex">
        <h4 className="title">icon / primary</h4>
        <EuiBadge type="icon" color="primary">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">icon / success</h4>
        <EuiBadge type="icon" color="success">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">icon / warning</h4>
        <EuiBadge type="icon" color="warning">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">icon / danger</h4>
        <EuiBadge type="icon" color="danger">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">icon / outline</h4>
        <EuiBadge type="icon" color="outline">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">icon / outline-filled</h4>
        <EuiBadge type="icon" color="outline-filled">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">icon / pending</h4>
        <EuiBadge type="icon" color="pending">
          <EuiIcon name="academic-cap" type="solid" />
        </EuiBadge>
      </span>


      <span className="flex">
        <h4 className="title">text / primary</h4>
        <EuiBadge type="text" color="primary">
          #1st anniversarry!
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text / success</h4>
        <EuiBadge type="text" color="success">
          #1st anniversarry!
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text / warning</h4>
        <EuiBadge type="text" color="warning">
          #1st anniversarry!
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text / danger</h4>
        <EuiBadge type="text" color="danger">
          #1st anniversarry!
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text / outline</h4>
        <EuiBadge type="text" color="outline">
          #1st anniversarry!
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text / outline-filled</h4>
        <EuiBadge type="text" color="outline-filled">
          #1st anniversarry!
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text / pending</h4>
        <EuiBadge type="text" color="pending">
          #1st anniversarry!
        </EuiBadge>
      </span>


      <span className="flex">
        <h4 className="title">text-icon / primary</h4>
        <EuiBadge type="text-icon" color="primary">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text-icon / success</h4>
        <EuiBadge type="text-icon" color="success">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text-icon / warning</h4>
        <EuiBadge type="text-icon" color="warning">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text-icon / danger</h4>
        <EuiBadge type="text-icon" color="danger">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text-icon / outline</h4>
        <EuiBadge type="text-icon" color="outline">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text-icon / outline-filled</h4>
        <EuiBadge type="text-icon" color="outline-filled">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

      <span className="flex">
        <h4 className="title">text-icon / pending</h4>
        <EuiBadge type="text-icon" color="pending">
          <div>Battery low!</div>
          <EuiIcon name="battery-0" type="solid" />
        </EuiBadge>
      </span>

    </div>
  )
}