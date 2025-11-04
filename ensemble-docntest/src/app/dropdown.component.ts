import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FakeDataService } from "./fake.api.service";
import { map } from "rxjs";
import { fakeProduct } from "./fakeData.const";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Dropdown by title</h4>
        <eui-dropdown
          [data]="data"
          display-field="title" 
          (itemSelected)="onProductSelected($event)"
          style="width: 25vw;"
          placeholder="Search products..."
        ></eui-dropdown>
      </span>
      <span class="flex">
        <h4 class="title">Dropdown by dimensions.height</h4>
        <eui-dropdown
          [data]="data"
          display-field="dimensions.height" 
          (itemSelected)="onProductSelected($event)"
          style="width: 25vw;"
          placeholder="Search products..."
        ></eui-dropdown>
      </span>
      <span class="flex">
        <h4 class="title">Dropdown by reviews.reviewerName</h4>
        <eui-dropdown
          [data]="data"
          display-field="reviews.reviewerName" 
          (itemSelected)="onProductSelected($event)"
          style="width: 25vw;"
          placeholder="Search products..."
        ></eui-dropdown>
      </span>
    </div>
    `
})
export class DropdownComponent {

  public data = fakeProduct.products;

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
