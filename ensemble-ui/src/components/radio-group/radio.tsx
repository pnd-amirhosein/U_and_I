import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
  tag: 'eui-radio',
  styleUrl: "./radio.scss",
  shadow: false,
})
export class EUIRadio {
  @Element() hostEl!: HTMLElement;

  @Prop({ attribute: "styleValue" }) styleValue?: string;
  @Prop() nativeAttrs?: Record<string, any>;
  @Prop() value!: string;
  @Prop({ mutable: true }) checked = false;
  @Prop() disabled = false;

  @Event() selected?: EventEmitter<string>;

  render() {

    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => ![
        'class',
        'styleValue',
        'nativeAttrs',
        'value',
        'checked',
        'disabled',
        'selected'
      ].includes(attr.name))
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
            ["rdo"]: true,
            ["rdo--selected"]: this.checked,
            ["rdo--disabled"]: this.disabled
          }}
        >
          <label>

            <input type="radio"
              checked={this.checked}
              disabled={this.disabled}
              onChange={() => this.selected?.emit(this.value)}
              value={this.value} />

            <span class="content">
              <slot />
            </span>
            <eui-icon key="check-circle" name='check-circle' type='micro' class="icon"></eui-icon>
          </label>
        </div>
      </Host>
    );
  }
}