import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ensemble-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class EnsembleButton {
  @Prop() label?: string = 'Click me';
  @Prop() variant?: 'primary' | 'secondary' = 'primary';

  render() {
    return <button class={`btn btn-${this.variant}`}>{this.label}</button>;
  }
}
