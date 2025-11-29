import { Component, Prop, h, Host, Element } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
  tag: 'eui-button',
  styleUrl: "./button.scss",
  shadow: false,
})
export class EUIButton {
  @Element() hostEl!: HTMLElement;

  @Prop({ attribute: "styleValue" }) styleValue?: string;
  @Prop() size: "sm" | "md" | "lg" = "md";
  @Prop() variant: 'primary' | 'danger' | 'success' | 'warning' | 'neutral' | 'info' = 'primary';
  @Prop() mode: "normal" | "outline" | "text-button" = "normal";

  render() {

    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => !['size', 'variant', 'mode', 'class', 'stylevalue'].includes(attr.name))
      .reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as Record<string, string>);

    return (
      <Host>
        <button
          style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
          {...attrs}
          class={{
            btn: true,
            [`btn--${this.size}`]: true,
            [`btn--${this.variant}`]: true,
            [`btn--${this.mode}`]: true,
          }}
        >
          <slot />
        </button>
      </Host>
    );
  }
}