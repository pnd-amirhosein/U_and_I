import { EuiButton, EuiDialogue } from 'ensemble-ui/react'

export default function DialoguePage() {
  return (
    <div className="doc">

      {/* Info */}
      <span className="flex">
        <h4 className="title">Info dialogue:</h4>

        <EuiDialogue
          styleValue="min-width: 25vw;"
          variant="info"
          headerMessage="Information fetched!"
        >
          <div slot="body">
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Found 3 system operation(s):</div>

              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>

          <div slot="footer">
            <EuiButton variant="info">close</EuiButton>
            <EuiButton variant="neutral">see details</EuiButton>
          </div>
        </EuiDialogue>
      </span>


      {/* Success */}
      <span className="flex">
        <h4 className="title">Success dialogue:</h4>

        <EuiDialogue
          styleValue="min-width: 25vw;"
          variant="success"
          headerMessage="Operation successfully done!"
        >
          <div slot="body">
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Found 3 system operation(s):</div>

              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>

          <div slot="footer">
            <EuiButton variant="success">close</EuiButton>
            <EuiButton variant="neutral">see details</EuiButton>
          </div>
        </EuiDialogue>
      </span>


      {/* Warning */}
      <span className="flex">
        <h4 className="title">Warning dialogue:</h4>

        <EuiDialogue
          styleValue="min-width: 25vw;"
          variant="warning"
          headerMessage="Maintain your operations!"
        >
          <div slot="body">
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Found 3 system operation(s):</div>

              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>

          <div slot="footer">
            <EuiButton variant="warning">close</EuiButton>
            <EuiButton variant="neutral">see details</EuiButton>
          </div>
        </EuiDialogue>
      </span>


      {/* Danger */}
      <span className="flex">
        <h4 className="title">Danger dialogue:</h4>

        <EuiDialogue
          styleValue="min-width: 25vw;"
          variant="danger"
          headerMessage="System null exception!"
        >
          <div slot="body">
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Found 3 system operation(s):</div>

              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>

          <div slot="footer">
            <EuiButton variant="danger">close</EuiButton>
            <EuiButton variant="neutral">see details</EuiButton>
          </div>
        </EuiDialogue>
      </span>

    </div>
  )
}