import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-button',
  styleUrl: "./button.scss",
  shadow: false,
})
export class EUIButton {
  @Element() hostEl!: HTMLElement;

  @Prop() style?: string;
  @Prop() size: "sm" | "md" | "lg" = "md";
  @Prop() variant: 'primary' | 'danger' | 'success' | 'warning' = 'primary';
  @Prop() mode: "normal" | "outline" | "text-button" = "normal";

  componentWillLoad() {
    if (this.style) {
      this.hostEl.setAttribute('style', this.style);
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
            [`btn--${this.mode}`]: this.mode !== 'normal',
          }}
        >
          <slot />
        </button>
      </Host>
    );
  }
}