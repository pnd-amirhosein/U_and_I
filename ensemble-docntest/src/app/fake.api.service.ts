// file: src/app/fake-data.service.ts
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FakeDataService {
  private data = ['one', 'two', 'three', 'four', 'five', 'banana', 'apple'];

  /**
   *
   */
  constructor(private http: HttpClient) {

  }
  getSuggestions(query: string) {
    const filtered = this.data.filter(x => x.toLowerCase().includes(query.toLowerCase()));
    return of(filtered).pipe(delay(300)); // simulate API latency
  }

  getProductsDummy(): Observable<any> {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.http.request('GET', "https://dummyjson.com/products", { responseType: 'json', params });
  }
}
