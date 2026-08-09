import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";
import { parseStyleString } from "packages/core/utils/helpers/parseStyle";

const KNOB_PATH =
    "M15.3 56.7C10.7 54.5 1.5 46.38 1.5 31.5C1.5 12.9 15.3 1.5 31.5 1.5C47.7 1.5 61.5 12.9 61.5 31.5C61.5 46.38 52.3 54.5 47.7 56.7";

@Component({
    tag: "eui-knob",
    styleUrl: "./knob.scss",
    shadow: false
})
export class EUIKnob {

    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() nativeAttrs?: Record<string, any>;
    @Prop() value = 75;
    @Prop() min = 0;
    @Prop() max = 100;
    @Prop() isPercent: boolean = false;

    private progressPath!: SVGPathElement;
    private pathLength = 0;
    private currentPercent = 0;
    private animationId = 0;

    private get percent() {
        const p = (this.value - this.min) / (this.max - this.min);
        return Math.max(0, Math.min(1, p));
    }

    componentDidLoad() {
        this.pathLength = this.progressPath.getTotalLength();
        this.currentPercent = this.percent;
        this.updateStroke()
    }

    disconnectedCallback() {
        cancelAnimationFrame(this.animationId);
    }

    @Watch("value")
    protected onValueChanged() {
        this.animateProgress();
    }

    private updateStroke() {
        const drawn = this.pathLength * this.currentPercent;
        this.progressPath.style.strokeDasharray = `${drawn} ${this.pathLength}`;
    }

    private animateProgress() {

        cancelAnimationFrame(this.animationId);

        const target = this.percent;

        const animate = () => {

            const diff = target - this.currentPercent;

            if (Math.abs(diff) < 0.001) {
                this.currentPercent = target;
                this.updateStroke();
                return;
            }

            this.currentPercent += diff * 0.15;
            this.updateStroke();
            this.animationId = requestAnimationFrame(animate);

        };

        animate();
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => ![
                'class',
                'nativeAttrs',
                'value',
                'min',
                'max',
                'isPercent'
            ].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <svg viewBox="-4 -4 71 67">
                    <path class="track" d={KNOB_PATH} />
                    <path ref={el => this.progressPath = el as SVGPathElement} class="progress" d={KNOB_PATH} />
                </svg>
                <span {...attrs} {...this.nativeAttrs} style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    class="value">{this.value + (this.isPercent ? "%" : "")}</span>
            </Host>
        );
    }
}