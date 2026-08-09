import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">Simple:</h4>
                <eui-knob style="width: 100px;" [value]="value1"/>
                <eui-button (click)="changeValue1()" size='md' variant='success'>Knob</eui-button>
        </span>
        <span class="flex">
            <h4 class="title">Numeric:</h4>
                <eui-knob style="width: 100px;" [value]="value2" [min]="10" [max]="50"/>
                <eui-button (click)="changeValue2()" size='md' variant='success'>Knob</eui-button>
        </span>
        <span class="flex">
            <h4 class="title">Percent:</h4>
                <eui-knob style="width: 100px;" [value]="value3" [isPercent]="true"/>
                <eui-button (click)="changeValue3()" size='md' variant='success'>Knob</eui-button>
        </span>
    </div>
    `
})
export class KnobComponent {

    counter = 0;
    value1 = 0;
    value2 = 0;
    value3 = 0;
    changeValue1() {
        const v = [10, 20, 30, 70, 90];

        console.log(this.counter, v.length);

        if (this.counter + 1 > v.length - 1) {
            this.counter = 0;
        }
        else {
            this.counter++
        }


        this.value1 = v[this.counter]

    }
    changeValue2() {
        const v = [12, 20, 30, 45];

        console.log(this.counter, v.length);

        if (this.counter + 1 > v.length - 1) {
            this.counter = 0;
        }
        else {
            this.counter++
        }


        this.value2 = v[this.counter]

    }
    changeValue3() {
        const v = [10, 20, 30, 70, 90];

        console.log(this.counter, v.length);

        if (this.counter + 1 > v.length - 1) {
            this.counter = 0;
        }
        else {
            this.counter++
        }


        this.value3 = v[this.counter]

    }


}