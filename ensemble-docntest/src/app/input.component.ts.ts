import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">primary - normal butts:</h4>
        <eui-input placeHolder="02934092384098">Small Primary</eui-input>
        <eui-input type="text">Small Primary</eui-input>
        <eui-input placeHolder="9458739847" type="password">Small Primary</eui-input>
        <eui-input type="text">Small Primary</eui-input>
      </span>
    </div>
    `
})
export class InputComponent { }
