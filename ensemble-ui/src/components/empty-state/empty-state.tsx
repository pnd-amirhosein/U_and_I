import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
    tag: 'eui-empty-state',
    styleUrl: "./empty-state.scss",
    shadow: false,
})
export class EUIEmptyState {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() nativeAttrs?: Record<string, any>;
    @Prop() icon?: string;
    @Prop({ attribute: "primaryAction" }) primaryAction?: string;
    @Prop({ attribute: "secondaryAction" }) secondaryAction?: string;

    @Event() primaryClick?: EventEmitter
    @Event() secondaryClick?: EventEmitter

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['icon', 'primaryAction', 'secondaryAction', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs} {...this.nativeAttrs}
                    class={{
                        empst: true
                    }}
                >
                    <div class="icon">
                        {this.icon && <eui-icon type="solid" name={this.icon} />}
                    </div>
                    <div class="content">
                        <slot />
                    </div>
                    <div class="actions">
                        {this.primaryAction && <eui-button onClick={() => this.primaryClick?.emit()} size='md' variant='primary'>{this.primaryAction}</eui-button>}
                        {this.secondaryAction && <eui-button onClick={() => this.secondaryClick?.emit()} size='md' variant='primary' mode='text-button'>{this.secondaryAction}</eui-button>}
                    </div>
                </div>
            </Host>
        );
    }
}