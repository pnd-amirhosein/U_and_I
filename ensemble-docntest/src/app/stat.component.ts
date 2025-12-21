import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex flex-col">
            <h4 class="title">Stat - horizontal:</h4>
            <span class="stepper-wrapper">
                <eui-stat [data]="value"/> 
            </span>
        </span>
        <span class="flex flex-col">
            <h4 class="title">Stat - horizontal:</h4>
            <span class="stepper-wrapper">
                <eui-stat orientation="vertical" [data]="value"/> 
            </span>
        </span>
    </div>
    `
})
export class StatComponent {
    value = { 'Amir H. Mardani': 'FSD', 'months of experience': "100<", 'Projects': "+17", 'Jobs': "+10" };
}
