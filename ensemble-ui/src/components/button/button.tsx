import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-button',
  styleUrl: "./button.scss",
  shadow: false,
})
export class EUIButton {
  @Element() hostEl!: HTMLElement;

  @Prop() styleValue?: string;
  @Prop() size: "sm" | "md" | "lg" = "md";
  @Prop() variant: 'primary' | 'danger' | 'success' | 'warning' | 'neutral' | 'info' = 'primary';
  @Prop() mode: "normal" | "outline" | "text-button" = "normal";

  componentWillLoad() {
    if (this.styleValue) {
      this.hostEl.setAttribute('style', this.styleValue);
    }
  }

  render() {

    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => !['size', 'variant', 'mode', 'class'].includes(attr.name))
      .reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as Record<string, string>);

    return (
      <Host>
        <button
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