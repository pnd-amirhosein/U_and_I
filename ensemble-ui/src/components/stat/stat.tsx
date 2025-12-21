import { Component, Prop, h, Host, Element, State } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-stat',
    styleUrl: "./stat.scss",
    shadow: false,
})
export class EUIStat {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() data: any[] = [];
    @Prop() orientation: "vertical" | "horizontal" = "horizontal";

    @State() localData: any = {}

    render() {

        this.localData = this.data;

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['orientation', 'class', 'stylevalue', 'data'].includes(attr.name))
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
                        stt: true,
                        [`stt--${this.orientation}`]: true,
                    }}
                >
                    {Object.keys(this.localData).map((item) => (
                        <span class="stat--item">
                            <span class="stat--data">{this.localData[item]}</span>
                            <span class="stat--title">{item}</span>
                        </span>
                    ))}
                </div>
            </Host>
        );
    }
}