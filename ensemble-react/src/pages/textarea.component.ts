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
        <eui-textarea styleValue="width:25vw;" placeHolder="simple input"/>
      </span>
    </div>
    `
})
export class TextareaComponent {
  sell = "1"
  checkMate(e: any): boolean {

    if (!e) return true
    else return false

  }
}
