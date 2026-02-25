import { Component, Prop, h, Host, Element, State, Event, EventEmitter } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { numberToWords } from 'packages/core/utils/helpers/numberToText'

@Component({
    tag: 'eui-stepper',
    styleUrl: "./stepper.scss",
    shadow: false,
})
export class EUIStepper {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() orientation: "vertical" | "horizontal" = "horizontal";
    @Prop() steps: string[] = [];
    @Prop() currentStep: number = 0;

    @State() localSteps: string[] = [];

    @Event() stepSelect!: EventEmitter<number>;

    render() {
        this.localSteps = this.steps;

        if (this.currentStep > this.steps.length) this.currentStep = this.steps.length
        else if (this.currentStep < 0) this.currentStep = 0

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['orientation', 'steps', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        stp: true,
                        [`stp--${this.orientation}`]: true,
                    }}
                >
                    {this.localSteps &&
                        this.localSteps.map((item, i) => (
                            // currentStep is zero based (start from 0!)
                            <div class="step">
                                <span class={`top ${this.currentStep == (i + 1) ? "in-progress" : (this.currentStep <= (i) ? "pending" : "done")}`}>
                                    {(i) < this.currentStep ?
                                        (<span class="checkbox-icon">
                                            <eui-icon name='check-circle' />
                                        </span>) :
                                        (i) == this.currentStep ?
                                            (<span class="in-progress"><span class="inner"></span></span>) :
                                            (<span class="pending"></span>)}
                                </span>
                                <span class="bottom-wrapper">
                                    <span class="bottom" onClick={() => this.stepSelect.emit(i)}>
                                        <span class="step-counter">step {numberToWords(i)}</span>
                                        <span class="title">{item}</span>
                                        <span>
                                            <eui-badge type="text"
                                                color={this.currentStep == (i) ? "primary" :
                                                    (this.currentStep <= (i) ? "pending" : "success")}>
                                                {this.currentStep == (i) ? "In progress" : (this.currentStep < (i) ? "Pending" : "Completed")}
                                            </eui-badge>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        ))}
                </div>
            </Host>
        );
    }
}