import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">Toggle:</h4>
             <eui-toggle value="1" [data]="data"/>
        </span>
        <span class="flex">
            <h4 class="title">Toggle - disabled:</h4>
             <eui-toggle disabled value="2" [data]="data"/>
        </span>
    </div>
    `
})
export class ToggleComponent {

    data = [
        { text: "All", icon: "archive-box-arrow-down" },
        { text: "Unread", icon: "adjustments-vertical" },
        { text: "Favorites", icon: "arrow-down" },
        { text: "Archived", icon: "bookmark" },
    ]
}