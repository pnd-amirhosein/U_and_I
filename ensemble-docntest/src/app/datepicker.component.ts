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
        <h4 class="title">Dropdown by title</h4>
        <eui-datepicker
          [date]="date"
          displayField="title" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
    </div>
    `
})
export class DatepickerComponent {

  public data = fakeProduct.products;
  public date = new Date();

  /**
   * This method will be called by the (itemSelected) event
   */
  onProductSelected(event: Event) {
    const product = (event as CustomEvent).detail;

    console.log('Product selected from Angular!', product);
    // Now you have the full object:
    // { id: 1, title: "Essence Mascara...", ... }
  }
}
