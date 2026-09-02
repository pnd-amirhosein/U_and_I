import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">Color picker - compact:</h4>
             <eui-color-picker/>
        </span>
        <span class="flex">
            <h4 class="title">Color picker - standard:</h4>
             <eui-color-picker mode="standard"/>
        </span>
        <span class="flex">
            <h4 class="title">Color picker - full:</h4>
             <eui-color-picker mode="full"/>
        </span>
    </div>
    `
})
export class ColorPickerComponent {

}