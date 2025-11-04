import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">blank / primary</h4>
        <eui-badge type="blank" color="primary"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">blank / success</h4>
        <eui-badge type="blank" color="success"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">blank / warning</h4>
        <eui-badge type="blank" color="warning"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">blank / danger</h4>
        <eui-badge type="blank" color="danger"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">blank / outline</h4>
        <eui-badge type="blank" color="outline"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">blank / outline-filled</h4>
        <eui-badge type="blank" color="outline-filled"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">blank / pending</h4>
        <eui-badge type="blank" color="pending"></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / primary</h4>
        <eui-badge type="number" color="primary">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / success</h4>
        <eui-badge type="number" color="success">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / warning</h4>
        <eui-badge type="number" color="warning">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / danger</h4>
        <eui-badge type="number" color="danger">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / outline</h4>
        <eui-badge type="number" color="outline">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / outline-filled</h4>
        <eui-badge type="number" color="outline-filled">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">number / pending</h4>
        <eui-badge type="number" color="pending">1</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / primary</h4>
        <eui-badge type="icon" color="primary"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / success</h4>
        <eui-badge type="icon" color="success"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / warning</h4>
        <eui-badge type="icon" color="warning"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / danger</h4>
        <eui-badge type="icon" color="danger"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / outline</h4>
        <eui-badge type="icon" color="outline"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / outline-filled</h4>
        <eui-badge type="icon" color="outline-filled"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">icon / pending</h4>
        <eui-badge type="icon" color="pending"><eui-icon name="academic-cap" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / primary</h4>
        <eui-badge type="text" color="primary">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / success</h4>
        <eui-badge type="text" color="success">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / warning</h4>
        <eui-badge type="text" color="warning">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / danger</h4>
        <eui-badge type="text" color="danger">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / outline</h4>
        <eui-badge type="text" color="outline">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / outline-filled</h4>
        <eui-badge type="text" color="outline-filled">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text / pending</h4>
        <eui-badge type="text" color="pending">#1st anniversarry!</eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / primary</h4>
        <eui-badge type="text-icon" color="primary"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / success</h4>
        <eui-badge type="text-icon" color="success"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / warning</h4>
        <eui-badge type="text-icon" color="warning"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / danger</h4>
        <eui-badge type="text-icon" color="danger"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / outline</h4>
        <eui-badge type="text-icon" color="outline"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / outline-filled</h4>
        <eui-badge type="text-icon" color="outline-filled"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
      <span class="flex">
        <h4 class="title">text-icon / pending</h4>
        <eui-badge type="text-icon" color="pending"><div>Battery low!</div><eui-icon name="battery-0" type="solid"/></eui-badge>
      </span>
    </div>
    `
})
export class BadgeComponent {


}
