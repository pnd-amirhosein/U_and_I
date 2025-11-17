import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
    tag: 'eui-card',
    styleUrl: "./card.scss",
    shadow: false,
})
export class EUICard {
    @Element() hostEl!: HTMLElement;

    @Prop() styleValue?: string;
    @Prop() img: string = "";
    @Prop() orientation: "horizontal" | "vertical" = "vertical";
    @Prop() mode: "classic" | "belt" | "lollipop" | "gem" | "Flag" = 'classic';

    componentWillLoad() {
        if (this.styleValue) {
            this.hostEl.setAttribute('style', this.styleValue);
        }
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['orientation', 'mode', 'class', 'img'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div
                    {...attrs}
                    class={{
                        crd: true,
                        [`crd--${this.orientation}`]: true,
                        [`crd--${this.mode}`]: true,
                    }}
                >
                    <div class="image" style={{ "backgroundImage": `url(${this.img})` }}></div>
                    <slot />
                </div>
            </Host>
        );
    }
}