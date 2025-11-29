import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Simple Input</h4>
        <eui-dialogue styleValue="width: 25vw;" variant="info" headerMessage="Warning!!">
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
            <eui-button variant="info">Cancel</eui-button>
            <eui-button variant="neutral">Continue</eui-button>
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
