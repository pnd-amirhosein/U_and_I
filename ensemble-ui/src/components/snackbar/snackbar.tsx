import {
    Component,
    Prop,
    h,
    Host,
    Element,
    Event,
    EventEmitter,
    Watch
} from '@stencil/core';

import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-snackbar',
    styleUrl: './snackbar.scss',
    shadow: false,
})
export class EUISnackbar {

    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: 'styleValue' }) styleValue?: string;
    @Prop() nativeAttrs?: Record<string, any>;

    @Prop() dismiss: boolean = false;

    @Prop()
    variant: 'danger' | 'success' | 'warning' | 'neutral' | 'info' = 'info';

    @Prop() header?: string;
    @Prop() icon?: string;

    @Prop()
    message: string = 'Placeholder for message';

    @Prop({ attribute: 'awakeTime' })
    awakeTime: number = 1000;

    @Prop()
    open: boolean = false;

    @Event()
    dismissing!: EventEmitter<void>;

    private timeoutId?: ReturnType<typeof setTimeout>;

    // --------------------------------------------------
    // OPEN CHANGED
    // --------------------------------------------------

    @Watch('open')
    handleOpen(value: boolean) {

        // Always kill previous timer
        this.clearTimer();

        // If snackbar closed, we're done
        if (!value) {
            return;
        }

        // No automatic dismissal
        if (!this.awakeTime) {
            return;
        }

        // Start new timer
        this.timeoutId = setTimeout(() => {

            // Tell the parent:
            // "Hey, please close me."
            this.dismissing.emit();

            this.clearTimer();

        }, this.awakeTime);
    }

    // --------------------------------------------------
    // INITIAL LOAD
    // --------------------------------------------------

    componentWillLoad() {
        this.handleOpen(this.open);
    }

    // --------------------------------------------------
    // MANUAL DISMISS
    // --------------------------------------------------

    private handleDismiss = () => {

        this.clearTimer();

        this.dismissing.emit();
    };

    // --------------------------------------------------
    // TIMER CLEANUP
    // --------------------------------------------------

    private clearTimer() {

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    }

    disconnectedCallback() {
        this.clearTimer();
    }

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => ![
                'class',
                'nativeAttrs',
                'dismiss',
                'variant',
                'header',
                'icon',
                'message',
                'awakeTime',
                'open'
            ].includes(attr.name))
            .reduce((acc, attr) => {

                acc[attr.name] = attr.value;

                return acc;

            }, {} as Record<string, string>);

        return (
            <Host>

                <div
                    style={
                        this.styleValue
                            ? parseStyleString(this.styleValue)
                            : undefined
                    }

                    {...attrs}
                    {...this.nativeAttrs}

                    class={{
                        snck: true,
                        [`snck--${this.variant}`]: true,
                        'snck--visible': this.open
                    }}
                >

                    <div class="content">

                        <div class="icon">

                            {(() => {

                                let icon = this.icon;

                                if (!icon) {

                                    switch (this.variant) {

                                        case 'info':
                                            icon = 'information-circle';
                                            break;

                                        case 'danger':
                                            icon = 'x-mark';
                                            break;

                                        case 'success':
                                            icon = 'check';
                                            break;

                                        case 'warning':
                                            icon = 'exclamation-triangle';
                                            break;

                                        default:
                                            break;
                                    }
                                }

                                return (
                                    <span class="icon-container">
                                        <eui-icon
                                            name={icon}
                                            type="outline"
                                            class="hydrated"
                                        />
                                    </span>
                                );

                            })()}

                        </div>

                        <div class="text">

                            {this.header && (
                                <div class="header">
                                    {this.header}
                                </div>
                            )}

                            <div class="message">
                                {this.message}
                            </div>

                        </div>

                    </div>

                    <div class="dismiss">

                        {this.dismiss && (
                            <eui-button
                                mode="text-button"
                                variant={this.variant}
                                onClick={this.handleDismiss}
                            >
                                dismiss
                            </eui-button>
                        )}

                    </div>

                </div>

            </Host>
        );
    }
}