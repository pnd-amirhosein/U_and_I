import { EuiToggle } from 'ensemble-ui/react'

export default function TogglePage() {
  const data = [
    { text: 'All', icon: 'archive-box-arrow-down' },
    { text: 'Unread', icon: 'adjustments-vertical' },
    { text: 'Favorites', icon: 'arrow-down' },
    { text: 'Archived', icon: 'bookmark' },
  ]

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Toggle:</h4>

        <EuiToggle
          value={1}
          data={data}
        />
      </span>

      <span className="flex">
        <h4 className="title">Toggle - disabled:</h4>

        <EuiToggle
          disabled
          value={2}
          data={data}
        />
      </span>

    </div>
  )
}