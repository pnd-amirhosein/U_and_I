import { Component } from "@angular/core";
import { EuiRadio, EuiRadioGroup } from "ensemble-ui/angular";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  imports: [EuiRadio, EuiRadioGroup],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Horizontal separate:</h4>
        <eui-radio-group styleValue="width:25vw;" id="pets">
          <eui-radio value="dog">Dog</eui-radio>
          <eui-radio value="cat">Cat</eui-radio>
          <eui-radio value="fox">Fox</eui-radio>
        </eui-radio-group>
      </span>
      <span class="flex">
        <h4 class="title">Horizontal Stacked:</h4>
        <eui-radio-group styleValue="width:25vw;" [stacked]="true" id="pets">
          <eui-radio value="dog">Dog</eui-radio>
          <eui-radio value="cat">Cat</eui-radio>
          <eui-radio value="fox">Fox</eui-radio>
        </eui-radio-group>
      </span>
      <span class="flex">
        <h4 class="title">Vertical separate:</h4>
        <eui-radio-group alignment="vertical" styleValue="width:25vw;" id="pets">
          <eui-radio value="dog">Dog</eui-radio>
          <eui-radio value="cat">Cat</eui-radio>
          <eui-radio value="fox">Fox</eui-radio>
        </eui-radio-group>
      </span>
      <span class="flex">
        <h4 class="title">Vertical Stacked:</h4>
        <eui-radio-group alignment="vertical" styleValue="width:25vw;" [stacked]="true" id="pets">
          <eui-radio value="dog">Dog</eui-radio>
          <eui-radio value="cat">Cat</eui-radio>
          <eui-radio value="fox">Fox</eui-radio>
        </eui-radio-group>
      </span>
    </div>
    `
})
export class RadioComponent {
  sell = "1"
  checkMate(e: any): boolean {

    if (!e) return true
    else return false

  }
}
