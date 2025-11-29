import { Component, Prop, h, Host, Element, State } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-progressbar',
    styleUrl: "./progress-bar.scss",
    shadow: false,
})
export class EUIProgressbar {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() size: "sm" | "md" | "lg" = "md";
    @Prop() value: number = 0;

    @State() value_state: number = 0

    render() {
        console.log(this.value, typeof this.value);

        if (0 > this.value || this.value > 1) throw "Value must be between 0 and 1!"
        else this.value_state = this.value;

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['size', 'value', 'class', 'stylevalue'].includes(attr.name))
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
                        prg: true,
                        [`prg--${this.size}`]: true,
                        'prg--bar': true
                    }}>
                    <div class="prg--value" style={{ "width": this.value_state * 100 + "%" }}></div>
                </div>
            </Host>
        );
    }
}