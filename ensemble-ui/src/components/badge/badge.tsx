import { Component, Prop, h, Host, Element } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-badge',
    styleUrl: './badge.scss',
    shadow: false,
})
export class EUIBadge {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() type: 'blank' | 'icon' | 'number' | 'text-icon' | 'text' = 'blank';
    @Prop() color: 'primary' | 'success' | 'warning' | 'danger' | 'outline' | 'outline-filled' | 'pending' = 'primary';

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['type', 'color', 'class','stylevalue'].includes(attr.name))
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
                        bdg: true,
                        [`bdg--${this.type}`]: true,
                        [`bdg--${this.color}`]: true,
                    }}
                >
                    <slot />
                </div>
            </Host>
        );
    }
}