import { Component } from "@angular/core";
import { EuiTab } from "ensemble-ui/angular";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    imports: [EuiTab],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">TABS:</h4>
            <eui-tab [data]="data"/>
        </span>
        <span class="flex">
            <h4 class="title">TABS collapse:</h4>
            <eui-tab [data]="data" [collapse]="true"/>
        </span>
        <span class="flex">
            <h4 class="title">TABS disabled:</h4>
            <eui-tab [data]="data" [disabled]="true"/>
        </span>
        <span class="flex">
            <h4 class="title">TABS collapse and disabled:</h4>
            <eui-tab [data]="data" [collapse]="true" [disabled]="true"/>
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