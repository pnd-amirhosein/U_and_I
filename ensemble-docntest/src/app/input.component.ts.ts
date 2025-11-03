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
        <eui-input styleValue="width: 25vw;" placeHolder="simple input"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Simple numeric Input</h4>
        <eui-input styleValue="width: 25vw;" type="number" placeHolder="simple input"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Numeric Input with min max (2,8)</h4>
        <eui-input styleValue="width: 25vw;" min="2" max="8" type="number" placeHolder="simple input"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Input with validation (maxlength:10)</h4>
        <eui-input styleValue="width: 25vw;" [validation]={maxLength:10} type="text"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Success message</h4>
        <eui-input styleValue="width: 25vw;" type="text" [validation]={custom:checkMate(sell)} [alert]="{ message: 'There is a success!', type: 'success' }"></eui-input>
      </span>
      <span class="flex">
        <h4 class="title">Password input</h4>
        <eui-input styleValue="width: 25vw;" placeHolder="enter password" type="password"></eui-input>
      </span>
    </div>
    `
})
export class InputComponent {
  sell = "1"
  checkMate(e: any): boolean {
    console.log(e);
    if (!e) return true
    else return false

  }
}
