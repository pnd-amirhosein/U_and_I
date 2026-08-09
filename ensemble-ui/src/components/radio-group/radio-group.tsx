import { Component, Prop, h, Host, Element, Event, EventEmitter, Watch } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

@Component({
  tag: 'eui-radio-group',
  styleUrl: "./radio.scss",
  shadow: false,
})
export class EUIRadioGroup {
  @Element() hostEl!: HTMLElement;

  @Prop({ attribute: "styleValue" }) styleValue?: string;
  @Prop() nativeAttrs?: Record<string, any>;
  @Prop() alignment: "horizontal" | "vertical" = "horizontal"
  @Prop() stacked: boolean = false
  @Prop({ mutable: true }) selected?: string;

  @Event() changed!: EventEmitter<string>;

  @Watch("selected")
  protected selectedChanged() {
    this.updateSelection();
  }

  componentDidLoad() {

    const radios =
      this.hostEl.querySelectorAll("eui-radio");

    radios.forEach(radio => {

      radio.addEventListener("selected", e => {

        this.selected =
          (e as CustomEvent<string>).detail;

        this.updateSelection();

        this.changed.emit(this.selected);

      });

    });

  }

  private updateSelection() {

    const radios =
      this.hostEl.querySelectorAll("eui-radio");

    radios.forEach(radio => {

      radio.checked =
        radio.value === this.selected;

    });

  }

  render() {

    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => !['alignment', 'stacked', 'class', 'stylevalue'].includes(attr.name))
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
            ["rdo--group"]: true,
            [`rdo--${this.alignment}`]: true,
            [`rdo--stacked`]: this.stacked,
            [`rdo--separate`]: !this.stacked,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}