import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { fakeProduct } from "./fakeData.const";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc" style="height: 30vh;">
      <span class="flex">
        <h4 class="title">Basic datepicker</h4>
        <eui-datepicker
          [date]="date"
          (dateChanged)="onDateSelected($event)"
          styleValue="width: 25vw;"
        />
      </span>
    </div>
    `
})
export class DatepickerComponent {

  public date = new Date();

  /**
   * This method will be called by the (itemSelected) event
   */
  onDateSelected(event: Event) {

  }
}
