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
        <eui-dialogue variant="danger" header-message="Warning!!">
          <div slot="body">
            Something catastrophic is about to happen.
          </div>
          <div slot="footer">
            <eui-button variant="danger">Cancel</eui-button>
            <eui-button variant="neutral">Continue</eui-button>
            <eui-button ></eui-button>
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
