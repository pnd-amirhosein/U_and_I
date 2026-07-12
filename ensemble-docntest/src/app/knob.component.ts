import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">Toggle - disabled:</h4>
                <eui-knob style="width: 142px;" [value]="value" [isPercent]="true"/>
                <eui-button (click)="changeValue()" size='md' variant='success'>Knob</eui-button>
        </span>
    </div>
    `
})
export class KnobComponent {

    counter = 0;
    value = 0;
    changeValue() {
        const v = [10, 20, 30, 70, 90];

        console.log(this.counter, v.length);

        if (this.counter + 1 > v.length - 1) {
            this.counter = 0;
        }
        else {
            this.counter++
        }


        this.value = v[this.counter]

    }


}