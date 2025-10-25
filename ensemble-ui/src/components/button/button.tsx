import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-button',
  styleUrl: "./button.scss",
  shadow: false,
})
export class EUIButton {
  @Element() hostEl!: HTMLElement;

  /** Button size */
  @Prop() size: "sm" | "md" | "lg" = "md";

  /** Button variant */
  @Prop() variant: 'primary' | 'danger' | 'success' | 'warning' = 'primary';

  /** Style mode of the button */
  @Prop() mode: "normal" | "outline" | "text-button" = "normal";

  render() {

    console.log('--- EUI-BUTTON RENDER STATE ---');
    console.log('Props:', {
      size: this.size,
      variant: this.variant,
      mode: this.mode,
    });
    // console.log('Forwarded Attrs:', attrs);
    console.log('Host Element:', this.hostEl);

    // Forward all extra attributes on <eui-button> to the inner <button>
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