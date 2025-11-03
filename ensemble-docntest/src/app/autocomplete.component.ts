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
        <h4 class="title">Simple Input</h4>
        <eui-auto-complete
          [fetchSuggestions]="fetchSuggestions"
          displayField="title" 
          (itemSelected)="onProductSelected($event)"
          style="width: 25vw;"
          placeholder="Search products..."
        ></eui-auto-complete>
      </span>
    </div>
    `
})
export class AutoCompleteComponent {

  constructor(private fakeApi: FakeDataService) { }

  // This is now much cleaner!
  fetchSuggestions = (query: string) => {


    this.fakeApi.getProductsDummy().subscribe(d => {

      console.log(d);
    })

    return this.fakeApi.getProductsDummy()
      .pipe(
        map(response => {
          if (!query || query.trim() === '') {
            return [];
          }
          // The filtering is happening here!
          return response.products.filter((product: any) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
        })
      )
      .toPromise();
  };

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
