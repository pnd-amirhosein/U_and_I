import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FakeDataService } from "./fake.api.service";
import { map } from "rxjs";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">["false","true"]</h4>
        <eui-checkbox
          (valueChange)="vals[0] = ($event.detail.toString())"
          states='["false","true"]'
          size="sm"
        ></eui-checkbox>
        <span>{{vals[0]}}</span>
        <eui-checkbox
          (valueChange)="vals[1] = ($event.detail.toString())"
          states='["false","true"]'
          size="md"
        ></eui-checkbox>
        <span>{{vals[1]}}</span>
        <eui-checkbox
          (valueChange)="vals[2] = ($event.detail.toString())"
          states='["false","true"]'
          size="lg"
        ></eui-checkbox>
        <span>{{vals[2]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">["null","false","true"]</h4>
        <eui-checkbox
          (valueChange)="vals[3] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="sm"
        ></eui-checkbox>
        <span>{{vals[3]}}</span>
        <eui-checkbox
          (valueChange)="vals[4] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="md"
        ></eui-checkbox>
        <span>{{vals[4]}}</span>
        <eui-checkbox
          (valueChange)="vals[5] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="lg"
        ></eui-checkbox>
        <span>{{vals[5]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">["null" , "false" , "partial" , "true"]</h4>
        <eui-checkbox
          (valueChange)="vals[6] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="sm"
        ></eui-checkbox>
        <span>{{vals[6]}}</span>
        <eui-checkbox
          (valueChange)="vals[7] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="md"
        ></eui-checkbox>
        <span>{{vals[7]}}</span>
        <eui-checkbox
          (valueChange)="vals[8] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="lg"
        ></eui-checkbox>
        <span>{{vals[8]}}</span>
      </span>
    </div>
    `
})
export class CheckboxComponent {

  vals = ["null", "null", "null", "null", "null", "null", "null", "null", "null"];

}
