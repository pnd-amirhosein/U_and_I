import { Component, Prop, h, Host, Element, State } from '@stencil/core';
import { Alert, Validation } from "packages/core/utils/helpers/types"
import { IconStyleEnum } from "packages/core/utils/helpers/enums"

@Component({
    tag: 'eui-input',
    styleUrl: './input.scss',
    shadow: false,
})
export class EUIInput {
    @Element() hostEl!: HTMLElement;

    @Prop() iconStyle: IconStyleEnum = IconStyleEnum.outline;
    @Prop() validation?: Validation;
    @Prop() alert: Alert = { message: "There's an error!", type: "danger" }
    @Prop() mode: 'normal' | 'outline' | 'text-input' = 'normal';
    @Prop() type: HTMLInputElement['type'] = 'text';

    private inputEl!: HTMLInputElement;
    @State() private value: string = '';
    @State() private isValid: boolean = true;
    @State() private passwordVisible: boolean = false;


    private resetInput = () => {
        this.value = '';
        this.inputEl.value = '';
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


    render() {
        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['size', 'variant', 'mode', 'class', 'validation', 'alert', 'mode'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div class={`input-wrapper ${this.hostEl.attributes.getNamedItem("class") ?? ""}`}>
                    <span class="input">
                        <input
                            ref={el => (this.inputEl = el!)}
                            {...attrs}
                            type={this.type === 'password' && this.passwordVisible ? 'text' : this.type}
                            value={this.value}
                            onInput={this.onInput}
                            class={{
                                [`input--${this.mode}`]: this.mode !== 'normal',
                            }}
                        />
                        <eui-icon-x-mark
                            onClick={this.resetInput}
                            type={this.iconStyle}
                            class={`clear-button ${this.value.length == 0 ? "hide" : ""}`}
                        ></eui-icon-x-mark>
                        {this.type === 'password' && (
                            <>
                                {this.passwordVisible ? (
                                    <eui-icon-eye-slash
                                        type={this.iconStyle}
                                        onClick={() => (this.passwordVisible = !this.passwordVisible)}
                                    ></eui-icon-eye-slash>
                                ) : (
                                    <eui-icon-eye
                                        type={this.iconStyle}
                                        onClick={() => (this.passwordVisible = !this.passwordVisible)}
                                    ></eui-icon-eye>
                                )}
                            </>
                        )}
                    </span>
                    {(!this.isValid && this.alert.type == 'danger') && (
                        <span class="alert danger">
                            <eui-icon-exclamation-triangle type={this.iconStyle}></eui-icon-exclamation-triangle>
                            <p class="alert-text">{this.alert.message}</p>
                        </span>
                    )}
                    {(!this.isValid && this.alert.type == 'success') && (
                        <span class="alert success">
                            <eui-icon-check-circle type={this.iconStyle}></eui-icon-check-circle>
                            <p class="alert-text">{this.alert.message}</p>
                        </span>
                    )}
                </div>
            </Host>
        );
    }
}
