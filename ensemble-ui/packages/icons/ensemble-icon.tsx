import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'test-button',
  shadow: true
})
export class TestButton {
  @Prop() name?: string;

  render() {
    return <button>{this.name || 'Click'}</button>;
  }
}
