import { Component, Prop, h, Host, Element, Watch } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-snackbar',
    styleUrl: "./snackbar.scss",
    shadow: false,
})
export class EUISnackbar {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() dismiss: boolean = false;
    @Prop() variant: 'danger' | 'success' | 'warning' | 'neutral' | 'info' = 'info';
    @Prop() header?: string;
    @Prop() icon?: string;
    @Prop() message: string = "Placeholder for message"
    @Prop({ attribute: "awakeTime" }) awakeTime?: number;
    @Prop() open: boolean = false;

    @Watch('open')
    handleOpen(value: boolean) {
        if (value && this.awakeTime) {
            setTimeout(() => {
                this.open = false;
            }, this.awakeTime);
        }
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['dismiss', 'variant', 'message', 'header', 'icon', 'class', 'stylevalue'].includes(attr.name))
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
                        snck: true,
                        [`snck--${this.variant}`]: true,
                        "snck--visible": this.open
                    }}
                >
                    <div class="content">
                        <div class="icon">
                            {(() => {
                                let icon;
                                if (this.icon)
                                    icon = this.icon
                                else
                                    switch (this.variant) {
                                        case 'info':
                                            icon = "information-circle"
                                            break;
                                        case 'danger':
                                            icon = "x-mark"
                                            break;
                                        case 'success':
                                            icon = "check"
                                            break;
                                        case 'warning':
                                            icon = "exclamation-triangle"
                                            break;

                                        default:
                                            break;
                                    }

                                return (
                                    <span class="icon-container">
                                        <eui-icon name={icon} type="outline" class="hydrated" />
                                    </span>
                                )
                            })()}
                        </div>
                        <div class="text">
                            {this.header && (
                                <div class="header">{this.header}</div>
                            )}
                            <div class="message">{this.message}</div>
                        </div>

                    </div>
                    <div class="dismiss">
                        {this.dismiss && (<eui-button mode='text-button' variant={this.variant}>dismiss</eui-button>)}
                    </div>
                </div>
            </Host>
        );
    }
}