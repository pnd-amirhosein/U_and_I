import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Info dialogue:</h4>
        <eui-dialogue styleValue="min-width: 25vw;" variant="info" headerMessage="Information fetched!">
          <div slot="body">
            <span style="display: flex; flex-direction:column">
              <div>Found 3 system operation(s):</div>
              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>
          <div slot="footer">
            <eui-button variant="info">close</eui-button>
            <eui-button variant="neutral">see details</eui-button>
          </div>
        </eui-dialogue>
      </span>
      <span class="flex">
        <h4 class="title">Success dialogue:</h4>
        <eui-dialogue styleValue="min-width: 25vw;" variant="success" headerMessage="Operation successfully done!">
          <div slot="body">
            <span style="display: flex; flex-direction:column">
              <div>Found 3 system operation(s):</div>
              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>
          <div slot="footer">
            <eui-button variant="success">close</eui-button>
            <eui-button variant="neutral">see details</eui-button>
          </div>
        </eui-dialogue>
      </span>
      <span class="flex">
        <h4 class="title">Warning dialogue:</h4>
        <eui-dialogue styleValue="min-width: 25vw;" variant="warning" headerMessage="Maintain your operations!">
          <div slot="body">
            <span style="display: flex; flex-direction:column">
              <div>Found 3 system operation(s):</div>
              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>
          <div slot="footer">
            <eui-button variant="warning">close</eui-button>
            <eui-button variant="neutral">see details</eui-button>
          </div>
        </eui-dialogue>
      </span>
      <span class="flex">
        <h4 class="title">Danger dialogue:</h4>
        <eui-dialogue styleValue="min-width: 25vw;" variant="danger" headerMessage="System null exception!">
          <div slot="body">
            <span style="display: flex; flex-direction:column">
              <div>Found 3 system operation(s):</div>
              <ul>
                <li>Data attachment</li>
                <li>PDF parser</li>
                <li>Document generator</li>
              </ul>
            </span>
          </div>
          <div slot="footer">
            <eui-button variant="danger">close</eui-button>
            <eui-button variant="neutral">see details</eui-button>
          </div>
        </eui-dialogue>
      </span>
    </div>
    `
})
export class DialogueComponent {

  currentPage = 5

  con(e: any) {
    this.currentPage = e.detail;

  }

}
