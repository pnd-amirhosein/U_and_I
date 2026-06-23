import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <table class="eui--table eui--simple-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@Spades</td>
              <td>Daniel</td>
              <td><eui-badge type="text" color="success">Online</eui-badge></td>
            </tr>
            <tr>
              <td>2</td>
              <td>@Poker</td>
              <td>Isabella</td>
              <td><eui-badge type="text" color="pending">Offline</eui-badge></td>
            </tr>
            <tr>
              <td>3</td>
              <td>@GoFish</td>
              <td>Idris</td>
              <td><eui-badge type="text" color="danger">Banned</eui-badge></td>
            </tr>
          </tbody>
        </table>
      </span>
      <span class="flex">
        <table class="eui--table eui--semi-striped-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@Spades</td>
              <td>Daniel</td>
              <td><eui-badge type="text" color="success">Online</eui-badge></td>
            </tr>
            <tr>
              <td>2</td>
              <td>@Poker</td>
              <td>Isabella</td>
              <td><eui-badge type="text" color="pending">Offline</eui-badge></td>
            </tr>
            <tr>
              <td>3</td>
              <td>@GoFish</td>
              <td>Idris</td>
              <td><eui-badge type="text" color="danger">Banned</eui-badge></td>
            </tr>
          </tbody>
        </table>
      </span>
      <span class="flex">
        <table class="eui--table eui--full-lined-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@Spades</td>
              <td>Daniel</td>
              <td><eui-badge type="text" color="success">Online</eui-badge></td>
            </tr>
            <tr>
              <td>2</td>
              <td>@Poker</td>
              <td>Isabella</td>
              <td><eui-badge type="text" color="pending">Offline</eui-badge></td>
            </tr>
            <tr>
              <td>3</td>
              <td>@GoFish</td>
              <td>Idris</td>
              <td><eui-badge type="text" color="danger">Banned</eui-badge></td>
            </tr>
          </tbody>
        </table>
      </span>
      <span class="flex">
        <table class="eui--table eui--full-striped-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@Spades</td>
              <td>Daniel</td>
              <td><eui-badge type="text" color="success">Online</eui-badge></td>
            </tr>
            <tr>
              <td>2</td>
              <td>@Poker</td>
              <td>Isabella</td>
              <td><eui-badge type="text" color="pending">Offline</eui-badge></td>
            </tr>
            <tr>
              <td>3</td>
              <td>@GoFish</td>
              <td>Idris</td>
              <td><eui-badge type="text" color="danger">Banned</eui-badge></td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
    `
})
export class TableComponent {

}
