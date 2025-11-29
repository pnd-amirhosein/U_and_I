import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import { icons } from '../../../packages/icons';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({ tag: 'eui-icon', shadow: false, styleUrl: "./icon.scss" })
export class EUIIcon {
  @Element() hostEl!: HTMLElement;

  @Prop({ attribute: "styleValue" }) styleValue?: string; @Prop() name: string = '';
  @Prop() type: 'solid' | 'outline' | 'mini' | 'micro' = 'micro';

  @State() svg: string = '';

  componentWillLoad() {
    this.updateSvg();
  }

  @Watch('name')
  @Watch('type')
  nameOrTypeChanged() {
    this.updateSvg();
  }

  private updateSvg() {
    const key = `${this.type}/${this.name}`;
    this.svg = (icons as Record<string, string>)[key] || '';
  }

  render() {
    // Grab all native attributes except props we handle
    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => ![
        "styleValue",
        "class",
        'type'
      ].includes(attr.name))
      .reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as Record<string, string>);

    return this.svg
      ? <div {...attrs} style={this.styleValue ? parseStyleString(this.styleValue) : undefined} class={`icon-wrapper icon-${this.type}`} innerHTML={this.svg}></div>
      : <div class={`icon-wrapper icon-${this.type}`} style={{ color: 'gray', fontSize: '0.8em' }}>Icon not found</div>;
  }
}
