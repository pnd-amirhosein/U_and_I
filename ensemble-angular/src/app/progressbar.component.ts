import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Progressbar - sm:</h4>
       <eui-progressbar styleValue="width:25vw;" size='sm' [value]="0.5"/>
      </span>
      <span class="flex">
        <h4 class="title">Progressbar - md:</h4>
       <eui-progressbar styleValue="width:25vw;" size='md' [value]="0.5"/>
      </span>
      <span class="flex">
        <h4 class="title">Progressbar - lg:</h4>
       <eui-progressbar styleValue="width:25vw;" size='lg' [value]="0.5"/>
      </span>
    </div>
    `
})
export class ProgressbarComponent {
}
