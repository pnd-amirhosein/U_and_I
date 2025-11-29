import { Component, Prop, h, Host, Element } from '@stencil/core';
import { parseStyleString } from '../../../packages/core/utils/helpers/parseStyle'

@Component({
    tag: 'eui-dialogue',
    styleUrl: "./dialogue.scss",
    shadow: false,
})
export class EUIDialogue {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() variant: 'primary' | 'danger' | 'success' | 'warning' | 'info' = 'primary';
    @Prop({ attribute: 'headerMessage' }) headerMessage: string = "MESSAGE!"

    // componentWillLoad() {
    //     if (this.styleValue) {
    //         this.hostEl.setAttribute('style', this.styleValue);
    //     }
    // }


    render() {

        const variantIcons = {
            primary: <eui-icon name="exclamation-circle" type="solid" />,
            info: <eui-icon name="exclamation-circle" type="solid" />,
            danger: <eui-icon name="x-circle" type="solid" />,
            success: <eui-icon name="check-circle" type="solid" />,
            warning: <eui-icon name="exclamation-triangle" type="solid" />,
        };

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['variant', 'class', 'headerMessage', 'stylevalue'].includes(attr.name))
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
                        dlg: true,
                        [`dlg--${this.variant}`]: true,
                    }}
                >
                    <header class="dlg--header">
                        {variantIcons[this.variant]}
                        <span>{this.headerMessage}</span>
                    </header>

                    <section class="dlg--body">
                        <slot name="body"></slot>
                    </section>

                    <footer class="dlg--footer">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </Host>
        );
    }
}