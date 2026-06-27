import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">TABS:</h4>
            <eui-tab [data]="data"/>
        </span>
        <span class="flex">
            <h4 class="title">TABS collapse:</h4>
            <eui-tab [data]="data" collapse/>
        </span>
        <span class="flex">
            <h4 class="title">TABS disabled:</h4>
            <eui-tab [data]="data" disabled/>
        </span>
        <span class="flex">
            <h4 class="title">TABS collapse and disabled:</h4>
            <eui-tab [data]="data" collapse disabled/>
        </span>
    </div>
    `
})
export class TabComponent {
    data: TabData[] = [
        { Title: "Personal info", Icon: "user" },
        { Title: "Stock data", Icon: "arrow-trending-up" },
        { Title: "Contact", Icon: "phone", badgeCounter: "5" },
        { Title: "Other info", Icon: "ellipsis-horizontal" }
    ]
}

export interface TabData {
    Title: string,
    Icon?: string,
    badgeCounter?: string
}