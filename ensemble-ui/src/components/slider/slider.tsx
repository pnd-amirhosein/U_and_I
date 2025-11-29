import { Component, Prop, h, Host, Element, State, Event, EventEmitter } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-slider',
    styleUrl: "./slider.scss",
    shadow: false,
})
export class EUISlider {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() size: "sm" | "md" | "lg" = "md";
    @Prop() value: number = 0;

    @Event() valueChange!: EventEmitter<number>;

    @State() value_state: number = 0
    @State() dragging: boolean = false;

    componentWillLoad() {
        this.value_state = this.clamp(this.value);
    }

    clamp(v: number) {
        return Math.min(1, Math.max(0, v));
    }

    updateValueFromEvent(ev: MouseEvent) {
        const bar = this.hostEl.querySelector(".sld") as HTMLElement;
        if (!bar) return;

        const rect = bar.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const percent = this.clamp(x / rect.width);

        this.value_state = percent;

        this.valueChange.emit(Number((+percent).toFixed(2)));
    }

    onMouseDown = (ev: MouseEvent) => {
        this.dragging = true;
        this.updateValueFromEvent(ev);

        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", this.onMouseUp);
    }

    onMouseMove = (ev: MouseEvent) => {
        if (this.dragging) this.updateValueFromEvent(ev);
    }

    onMouseUp = () => {
        this.dragging = false;
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
    }

    render() {
        if (this.value < 0 || this.value > 1)
            throw "Value must be between 0 and 1!";
        else
            this.value_state = this.value_state;

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
                        sld: true,
                        [`sld--${this.size}`]: true,
                        'sld--bar': true
                    }}
                    onMouseDown={this.onMouseDown}
                >
                    <div
                        class="sld--value"
                        style={{ width: this.value_state * 100 + "%" }}
                    ></div>
                </div>
            </Host>
        );
    }
}
