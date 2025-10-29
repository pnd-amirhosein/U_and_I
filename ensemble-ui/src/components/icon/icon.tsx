import { Component, h, Prop, State } from '@stencil/core';
import { icons } from '../../../packages/icons';


@Component({ tag: 'eui-icon', shadow: false, styleUrl:"./icon.scss" })
export class EUIIcon {
  
  @Prop() name: string = '';
  @Prop() type: 'solid' | 'outline' | 'mini' | 'micro' = 'micro';
  @State() svg: string = '';

  componentWillLoad() {
    const key = `${this.type}/${this.name}`;
    this.svg = (icons as Record<string, string>)[key] || '';
  }

  render() {
    return this.svg
      ? <div class={`icon-wrapper icon-${this.type}`} innerHTML={this.svg}></div>
      : <div class={`icon-wrapper icon-${this.type}`} style={{ color: 'gray', fontSize: '0.8em' }}>Icon not found</div>;
  }
}
