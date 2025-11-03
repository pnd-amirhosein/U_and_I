import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
    tag: 'eui-badge',
    styleUrl: './badge.scss',
    shadow: false,
})
export class EUIBadge {
    @Element() hostEl!: HTMLElement;

    @Prop() styleValue?: string;
    @Prop() type: 'blank' | 'icon' | 'number' | 'text-icon' | 'text' = 'blank';
    @Prop() color: 'primary' | 'success' | 'warning' | 'danger' | 'outline' | 'outline-filled' | 'pending' = 'primary';

    componentWillLoad() {
        if (this.styleValue) {
            this.hostEl.setAttribute('style', this.styleValue);
        }
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['type', 'color', 'class'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div
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