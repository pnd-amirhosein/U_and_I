import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { fakeProduct } from "./fakeData.const";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(1)" mode='text-button' variant="info">light</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[1]" awakeTime="3000" [dismiss]="false" variant="info" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(2)" mode='text-button' variant="warning">light</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[2]" awakeTime="3000" [dismiss]="false" variant="warning" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(3)" mode='text-button' variant="danger">light</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[3]" awakeTime="3000" [dismiss]="false" variant="danger" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(4)" mode='text-button' variant="success">light</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[4]" awakeTime="3000" [dismiss]="false" variant="success" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex"></span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(5)" mode='text-button' variant="info">Header</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[5]" awakeTime="3000" [dismiss]="false" variant="info" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(6)" mode='text-button' variant="warning">Header</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[6]" awakeTime="3000" [dismiss]="false" variant="warning" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(7)" mode='text-button' variant="danger">Header</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[7]" awakeTime="3000" [dismiss]="false" variant="danger" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(8)" mode='text-button' variant="success">Header</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[8]" awakeTime="3000" [dismiss]="false" variant="success" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex"></span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(9)" mode='text-button' variant="info">Header - dissmiss</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[9]" awakeTime="3000" [dismiss]="true" variant="info" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(10)" mode='text-button' variant="warning">Header - dissmiss</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[10]" awakeTime="3000" [dismiss]="true" variant="warning" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(11)" mode='text-button' variant="danger">Header - dissmiss</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[11]" awakeTime="3000" [dismiss]="true" variant="danger" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
      <span class="flex" style="width: 50vw;">
        <eui-button (click)="showSnackbar(12)" mode='text-button' variant="success">Header - dissmiss</eui-button>
        <span class="snackbar-container" style="width: 100%;">
          <eui-snackbar [open]="open[12]" awakeTime="3000" [dismiss]="true" variant="success" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
        </span>
      </span>
    </div>
    `
})
export class SnackabrComponent {

  public open: boolean[] = [
    false, false, false, false, false, false, false, false, false, false, false, false, false
  ]

  showSnackbar(index: number) {
    this.open[index] = true
  }
}
