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
        <h4 class="title">Chips by title</h4>
        <eui-chips
          [data]="data"
          display-field="title" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
      <span class="flex">
        <h4 class="title">Chips by dimensions.height</h4>
        <eui-chips
          [data]="data"
          display-field="dimensions.height" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
      <span class="flex">
        <h4 class="title">Chips by reviews.reviewerName</h4>
        <eui-chips
          [data]="data"
          display-field="reviews.reviewerName" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
    </div>
    `
})
export class ChipsComponent {

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
