import { Component, Prop, h, Host, Element } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-side-nav',
    styleUrl: "./side-nav.scss",
    shadow: false,
})
export class EUISidenav {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() size: "full" | "compact" = "full"
    @Prop() mode: "middle" | "start" = "middle"
    @Prop() direction: "rtl" | "ltr" = "ltr";

    componentDidLoad() {
        const icons = Array.from(
            this.hostEl.querySelectorAll('eui-icon')
        );

        const items = Array.from(
            this.hostEl.querySelectorAll('.item')
        );

        if (icons) {
            const widths = icons.map(
                icon => icon.getBoundingClientRect().width
            );

            if (widths) {
                const maxWidth = Math.max(...widths);

                const padding = Number.parseInt(getComputedStyle(items[0]).paddingRight.replace("px", "")) * 2

                this.hostEl.style.width = `calc(${maxWidth}px + ${padding}px + var(--space-2xl))`
            }
        }

        if (items) {
            const widths = items.map(
                icon => icon.getBoundingClientRect().width
            );

            if (widths) {
                const maxWidth = Math.max(...widths);

                const snv = this.hostEl.querySelector(".snv");

                if (snv)
                    (snv as HTMLElement).style.maxWidth = `calc(${maxWidth}px + var(--space-2xl)*2)`

            }
        }

    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['size', 'class', 'direction', 'stylevalue', 'mode'].includes(attr.name))
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
                        snv: true,
                        [`snv--${this.size}`]: true,
                        [`snv--${this.direction}`]: true,
                        [`snv--${this.mode}`]: true,
                    }}
                >
                    <span class="snv--top">
                        <slot name='top' />
                    </span>

                    <span class="snv--middle">
                        <slot name='middle' />
                    </span>

                    <span class="snv--bottom">
                        <slot name='bottom' />
                    </span>

                </div>
            </Host>
        );
    }
}