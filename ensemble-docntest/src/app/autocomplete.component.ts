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
          style="width: 25vw;" 
          placeholder="Type something..."
        ></eui-auto-complete>
      </span>
    </div>
    `
})
export class AutoCompleteComponent {

  constructor(private fakeApi: FakeDataService) { }

  fetchSuggestions = (query: string) => {
    this.fakeApi.getProductsDummy().pipe(map(x => x.products.map((p: any) => p.title))).subscribe(d => {

      console.log(d);
    })

    return this.fakeApi.getProductsDummy() // Assuming this is in your fakeApi
      .pipe(
        map(response => {
          // response is { products: [...] }
          const allProducts = response.products;

          // We need to re-introduce the filtering!
          const filteredProducts = allProducts.filter((product: any) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );

          // Now, map the filtered products to their titles
          return filteredProducts.map((product: any) => product.title);
        })
      )
      .toPromise();

  };
}
