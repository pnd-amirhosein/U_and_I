import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-font',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
    <div class="font-center flex gap-2">
        <div class="english-text flex gap-2 flex-col justify-between">
            <h1 class="text flex justify-center" style="font-stretch:{{stretch}}%; font-weight:{{weight}};">EnsembleUI, by Ilecy!</h1>
            <div class="flex flex-col gap-2">
                <div class="tool">
                    <div class="flex justify-between">
                        <div class="weight">Weight:</div>
                        <div class="weight">{{weight}}</div>
                    </div>
                    <eui-slider styleValue="width:40vw;" size='md' [value]="0.5" (valueChange)="weightCalc($event.detail)"/>
                </div>
                <div class="tool">
                    <div class="flex justify-between">
                        <div class="weight">stretch:</div>
                        <div class="weight">{{stretch}}</div>
                    </div>
                    <eui-slider styleValue="width:40vw;" size='md' [value]="0.5" (valueChange)="StretchCalc($event.detail)"/>
                </div>
            </div>
        </div>
        <div class="persian-text flex gap-2 flex-col justify-between">
            <h1 class="text rtl flex justify-center" style="font-stretch:{{stretchPersian}}%; font-weight:{{weightPersian}};">انسمبل، توسط ایلسی!</h1>
            <div class="flex flex-col gap-2">
                <div class="tool">
                    <div class="flex justify-between">
                        <div class="weight">Weight:</div>
                        <div class="weight">{{weightPersian}}</div>
                    </div>
                    <eui-slider styleValue="width:40vw;" size='md' [value]="0.5" (valueChange)="weightCalcPersian($event.detail)"/>
                </div>
                <div class="tool">
                    <div class="flex justify-between">
                        <div class="weight">stretch:</div>
                        <div class="weight">{{stretchPersian}}</div>
                    </div>
                    <eui-slider styleValue="width:40vw;" size='md' [value]="0.5" (valueChange)="StretchCalcPersian($event.detail)"/>
                </div>
            </div>
        </div>
    </div>
    `
})
export class FontComponent {

    stretch: number = 75;
    weight: number = 500;

    weightCalc(value: number) {
        this.weight = 100 + value * 800;
    }
    StretchCalc(value: number) {
        this.stretch = 75 + value * 50;
    }

    stretchPersian: number = 75;
    weightPersian: number = 500;

    weightCalcPersian(value: number) {
        this.weightPersian = 100 + value * 850;
    }
    StretchCalcPersian(value: number) {
        this.stretchPersian = 50 + value * 100;
    }
}
