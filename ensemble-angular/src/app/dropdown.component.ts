import { Component } from "@angular/core";
import { FakeDataService } from "./fake.api.service";
import { map } from "rxjs";
import { fakeProduct } from "./fakeData.const";
import { EuiDropdown } from "ensemble-ui/angular";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  imports: [EuiDropdown],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Dropdown by title</h4>
        <eui-dropdown
          [data]="data"
          displayField="title" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
      <span class="flex">
        <h4 class="title">Dropdown by dimensions.height</h4>
        <eui-dropdown
          [data]="data"
          displayField="dimensions.height" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
      <span class="flex">
        <h4 class="title">Dropdown by reviews.reviewerName</h4>
        <eui-dropdown
          [data]="data"
          displayField="reviews.reviewerName" 
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
      <span class="flex">
        <h4 class="title">Defalut value</h4>
        <eui-dropdown
          [data]="data"
          displayField="title" 
          defaultValue="Red Nail Polish"
          (itemSelected)="onProductSelected($event)"
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
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
