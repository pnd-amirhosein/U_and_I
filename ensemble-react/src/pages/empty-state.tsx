import { EuiEmptyState } from 'ensemble-ui/react'

export default function EmptyStatePage() {
  const test = () => {
    console.log('Test is clicked!')
  }

  return (
    <div className="doc">
      <span className="flex">
        <h4 className="title">empty state:</h4>

        <EuiEmptyState
          icon="x-mark"
          primaryAction="Create new chat"
          secondaryAction="join existing chats"
          onPrimaryClick={test}
          onSecondaryClick={test}
        >
          <span>It’s lonely here...</span>
        </EuiEmptyState>
      </span>
    </div>
  )
}