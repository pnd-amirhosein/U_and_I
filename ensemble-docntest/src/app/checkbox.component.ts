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
        <h4 class="title">Classic checkbox (null,true)</h4>
        <eui-checkbox
          (valueChange)="vals[9] = ($event.detail.toString())"
          states='["null","true"]'
          size="sm"
        ></eui-checkbox>
        <span class="valued">{{vals[9]}}</span>
        <eui-checkbox
          (valueChange)="vals[10] = ($event.detail.toString())"
          states='["null","true"]'
          size="md"
        ></eui-checkbox>
        <span class="valued">{{vals[10]}}</span>
        <eui-checkbox
          (valueChange)="vals[11] = ($event.detail.toString())"
          states='["null","true"]'
          size="lg"
        ></eui-checkbox>
        <span class="valued">{{vals[11]}}</span>
        <eui-checkbox
          (valueChange)="vals[12] = ($event.detail.toString())"
          states='["null","true"]'
          size="lg"
          mode="outline"
        ></eui-checkbox>
        <span class="valued">{{vals[12]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">Force to choose: false, true</h4>
        <eui-checkbox
          (valueChange)="vals[0] = ($event.detail.toString())"
          states='["false","true"]'
          size="sm"
          value="false"
        ></eui-checkbox>
        <span class="valued">{{vals[0]}}</span>
        <eui-checkbox
          (valueChange)="vals[1] = ($event.detail.toString())"
          states='["false","true"]'
          size="md"
          value="false"
        ></eui-checkbox>
        <span class="valued">{{vals[1]}}</span>
        <eui-checkbox
          (valueChange)="vals[2] = ($event.detail.toString())"
          states='["false","true"]'
          size="lg"
          value="false"
        ></eui-checkbox>
        <span class="valued">{{vals[2]}}</span>
                <eui-checkbox
          (valueChange)="vals[13] = ($event.detail.toString())"
          states='["false","true"]'
          size="lg"
          mode="outline"
          value="false"
        ></eui-checkbox>
        <span class="valued">{{vals[13]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">Choose but optional: (null,false,true)</h4>
        <eui-checkbox
          (valueChange)="vals[3] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="sm"
        ></eui-checkbox>
        <span class="valued">{{vals[3]}}</span>
        <eui-checkbox
          (valueChange)="vals[4] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="md"
        ></eui-checkbox>
        <span class="valued">{{vals[4]}}</span>
        <eui-checkbox
          (valueChange)="vals[5] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="lg"
        ></eui-checkbox>
        <span class="valued">{{vals[5]}}</span>
                <eui-checkbox
          (valueChange)="vals[14] = ($event.detail.toString())"
          states='["null","false","true"]'
          size="lg"
          mode="outline"
        ></eui-checkbox>
        <span class="valued">{{vals[14]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">Full options: (null , false , partial , true)</h4>
        <eui-checkbox
          (valueChange)="vals[6] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="sm"
        ></eui-checkbox>
        <span class="valued">{{vals[6]}}</span>
        <eui-checkbox
          (valueChange)="vals[7] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="md"
        ></eui-checkbox>
        <span class="valued">{{vals[7]}}</span>
        <eui-checkbox
          (valueChange)="vals[8] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="lg"
        ></eui-checkbox>
        <span class="valued">{{vals[8]}}</span>
                <eui-checkbox
          (valueChange)="vals[15] = ($event.detail.toString())"
          states='["null" , "false" , "partial" , "true"]'
          size="lg"
          mode="outline"
        ></eui-checkbox>
        <span class="valued">{{vals[15]}}</span>
      </span>
    </div>
    `
})
export class CheckboxComponent {

  vals = ["false", "false", "false", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"];

}
