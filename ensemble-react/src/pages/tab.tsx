import { EuiTab } from 'ensemble-ui/react'

interface TabData {
  Title: string
  Icon?: string
  badgeCounter?: string
}

export default function TabPage() {
  const data: TabData[] = [
    { Title: 'Personal info', Icon: 'user' },
    { Title: 'Stock data', Icon: 'arrow-trending-up' },
    { Title: 'Contact', Icon: 'phone', badgeCounter: '5' },
    { Title: 'Other info', Icon: 'ellipsis-horizontal' },
  ]

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">TABS:</h4>

        <EuiTab data={data} />
      </span>

      <span className="flex">
        <h4 className="title">TABS collapse:</h4>

        <EuiTab
          data={data}
          collapse
        />
      </span>

      <span className="flex">
        <h4 className="title">TABS disabled:</h4>

        <EuiTab
          data={data}
          disabled
        />
      </span>

      <span className="flex">
        <h4 className="title">TABS collapse and disabled:</h4>

        <EuiTab
          data={data}
          collapse
          disabled
        />
      </span>

    </div>
  )
}