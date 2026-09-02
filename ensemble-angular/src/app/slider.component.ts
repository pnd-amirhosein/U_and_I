import { Component } from "@angular/core";
import { EuiSlider } from "ensemble-ui/angular";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  imports: [EuiSlider],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Slider - sm:</h4>
       <eui-slider styleValue="width:25vw;" size='sm' [value]="0.5" (change)="values[0] = $event.detail"/>
       <span style="width: 50px;">{{values[0]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">Slider - md:</h4>
       <eui-slider styleValue="width:25vw;" size='md' [value]="0.5" (change)="values[1] = $event.detail"/>
       <span style="width: 50px;">{{values[1]}}</span>
      </span>
      <span class="flex">
        <h4 class="title">Slider - lg:</h4>
       <eui-slider styleValue="width:25vw;" size='lg' [value]="0.5" (change)="values[2] = $event.detail"/>
       <span style="width: 50px;">{{values[2]}}</span>
      </span>
    </div>
    `
})
export class SliderComponent {
  values = [0.5, 0.5, 0.5]
}
