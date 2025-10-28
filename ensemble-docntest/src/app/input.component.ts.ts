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
        <eui-input placeHolder="simple input"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Input with validation (maxlength:10)</h4>
        <eui-input [validation]={maxLength:10} type="text"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Success message</h4>
        <eui-input type="text"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Password input</h4>
        <eui-input placeHolder="enter password" type="password"></eui-input>
      </span>
    </div>
    `
})
export class InputComponent { }
