import { Component } from "@angular/core";
import { EuiPaginator } from "ensemble-ui/angular";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  imports: [EuiPaginator],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Simple Input</h4>
        <eui-paginator [totalPages]="10" [defaultCurrentPage]="currentPage" (currentPage)="con($event)"/>
        <span>current page: {{currentPage}}</span>
      </span>
      <span class="flex">
        <h4 class="title">Simple Input</h4>
        <eui-paginator [totalPages]="10" [defaultCurrentPage]="currentPage" [disabled]=true/>
      </span>
    </div>
    `
})
export class PaginatorComponent {

  currentPage = 5

  con(e: any) {
    this.currentPage = e.detail;

  }

}
