import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex flex-col">
            <h4 class="title">Stepper - horizontal:</h4>
            <span class="stepper-wrapper">
                <eui-stepper (stepSelect)="selected($event.detail)" [steps]="value" [currentStep]="currentStep"/> 
            </span>
        </span>
        <span class="flex flex-col">
            <h4 class="title">Stepper - vertical:</h4>
            <span class="stepper-wrapper vertical">
                <eui-stepper (stepSelect)="selected($event.detail)" orientation='vertical' [steps]="value" [currentStep]="currentStep"/> 
            </span>
            <span class="flex justify-between w-80">
                <eui-button (click)="change(-1)" mode='outline' size='sm' variant='info'>Previous</eui-button>
                <eui-button (click)="change(+1)" mode='outline' size='sm' variant='info'>Next</eui-button>
            </span>
        </span>
    </div>
    `
})
export class StepperComponent {
    value = ['Select flight', 'Passengers', 'Travel info', 'Payment method', 'Finalize'];
    currentStep = 0;

    change(value: number) {
        let v = this.currentStep + value;
        if (this.currentStep + value > this.value.length) v = this.value.length;
        else if (this.currentStep + value < 0) v = 0;

        this.currentStep = v
    }

    selected(e: number) {
        this.currentStep = e;

    }
}
