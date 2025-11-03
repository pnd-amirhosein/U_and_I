import { Component, Prop, h, Host, Element, State, Watch } from '@stencil/core';
import { Alert, Validation } from "packages/core/utils/helpers/types";

@Component({
  tag: 'eui-input',
  styleUrl: './input.scss',
  shadow: false,
})
export class EUIInput {
  @Element() hostEl!: HTMLElement;

  /** External value prop (mutable so it can be updated from parent) */
  @Prop({ mutable: true }) value: string = '';

  @Prop() styleValue?: string = '';
  @Prop() validation?: Validation;
  @Prop() alert: Alert = { message: "There's an error!", type: "danger" };
  @Prop() mode: 'normal' | 'outline' | 'text-input' = 'normal';
  @Prop() type: HTMLInputElement['type'] = 'text';
  @Prop() placeholder: string = '';
  @Prop() step: number = 1;
  @Prop() min?: number;
  @Prop() max?: number;

  private inputEl!: HTMLInputElement;
  @State() isValid: boolean = true;
  @State() passwordVisible: boolean = false;

  /** Watch for external value changes */
  @Watch('value')
  valueChanged(newValue: string) {
    this.isValid = this.validate(newValue);
    if (this.inputEl) this.inputEl.value = newValue;
  }

  private resetInput = () => {
    this.value = '';
    if (this.inputEl) this.inputEl.value = '';
    this.validate('');
  };

  private validate(value: string) {
    const v = this.validation;
    if (!v) return true;

    if (v.required && !value.trim()) return false;
    if (v.minLength && value.length < v.minLength) return false;
    if (v.maxLength && value.length > v.maxLength) return false;
    if (v.pattern && !v.pattern.test(value)) return false;

    if (v.custom) {
      const result = v.custom(value);
      if (typeof result === 'string') {
        this.alert = { message: result, type: 'danger' };
        return false;
      }
      return result;
    }

    return true;
  }

  private onInput = (e: InputEvent) => {
    this.value = (e.target as HTMLInputElement).value;
    this.isValid = this.validate(this.value);
  };

  private increment = () => {
    const current = parseFloat(this.value) || 0;
    let next = current + this.step;
    if (this.max !== undefined && next > this.max) next = this.max;
    this.value = next.toString();
  };

  private decrement = () => {
    const current = parseFloat(this.value) || 0;
    let next = current - this.step;
    if (this.min !== undefined && next < this.min) next = this.min;
    this.value = next.toString();
  };

  componentWillLoad() {
    if (this.styleValue) {
      this.hostEl.setAttribute('style', this.styleValue);
    }
  }

  render() {

    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => ![
        'styleValue',
        'validation',
        'alert',
        'mode',
        'type',
        'step',
        'min',
        'max',].includes(attr.name))
      .reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as Record<string, string>);

    return (
      <Host >
        <div class={`input-wrapper ${this.hostEl.getAttribute("class") ?? ""}`}>
          <span class={`input ${!this.isValid && this.alert.type == 'danger' ? "danger" : ""} 
              ${this.isValid && this.alert.type == 'success' ? "success" : ""}`}>

            <input
              ref={el => (this.inputEl = el!)}
              value={this.value}
              onInput={this.onInput}
              onBlur={(e) => this.hostEl.dispatchEvent(new CustomEvent('blur', { detail: e, bubbles: true }))}
              type={this.type === 'password' && this.passwordVisible ? 'text' : this.type}
              class={{
                [`input--${this.mode}`]: this.mode !== 'normal',
              }}
              {...attrs}
            />

            <span class="icon-bar">
              {/* Clear button */}
              {this.value.length !== 0 && (
                <eui-icon
                  key="x-mark"
                  name='x-mark'
                  onClick={this.resetInput}
                  type='solid'
                  class={`clear-button`}
                ></eui-icon>
              )}

              {/* Password toggle */}
              {this.type === "password" && (
                this.passwordVisible ? (
                  <eui-icon
                    key="eye-slash"
                    name="eye-slash"
                    type="outline"
                    class={"eye-slash"}
                    onClick={() => (this.passwordVisible = !this.passwordVisible)}
                  ></eui-icon>
                ) : (
                  <eui-icon
                    key="eye"
                    name="eye"
                    type="outline"
                    class={"eye"}
                    onClick={() => (this.passwordVisible = !this.passwordVisible)}
                  ></eui-icon>
                )
              )}

              <slot name="icon-end"></slot>

              {/* Custom number controls */}
              {this.type === "number" && (
                <div class="number-controls">
                  <eui-icon
                    key="chevron-up"
                    name="chevron-up"
                    type="mini"
                    class="number-up"
                    onClick={this.increment}
                  ></eui-icon>
                  <eui-icon
                    key="chevron-down"
                    name="chevron-down"
                    type="mini"
                    class="number-down"
                    onClick={this.decrement}
                  ></eui-icon>
                </div>
              )}
            </span>
          </span>

          {/* Alerts */}
          {(!this.isValid && this.alert.type === 'danger') && (
            <span class="alert danger">
              <eui-icon name='exclamation-triangle' type='solid'></eui-icon>
              <p class="alert-text">{this.alert.message}</p>
            </span>
          )}
          {(this.isValid && this.alert.type === 'success') && (
            <span class="alert success">
              <eui-icon name='check-circle' type='solid'></eui-icon>
              <p class="alert-text">{this.alert.message}</p>
            </span>
          )}
        </div>
      </Host>
    );
  }
}
