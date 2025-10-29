import { Component, Prop, h, Host, Element, State } from '@stencil/core';
import { Alert, Validation } from "packages/core/utils/helpers/types"

@Component({
    tag: 'eui-input',
    styleUrl: './input.scss',
    shadow: false,
})
export class EUIInput {
    @Element() hostEl!: HTMLElement;

    @Prop() style?: string;
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
        this.validate('')
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

    componentWillLoad() {
        if (this.style) {
            this.hostEl.setAttribute('style', this.style);
        }
    }

    render() {
        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['size', 'variant', 'mode', 'class', 'validation', 'alert', 'mode', 'style'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div class={`input-wrapper ${this.hostEl.attributes.getNamedItem("class") ?? ""}`}>
                    <span class={`input ${!this.isValid && this.alert.type == 'danger' ? "danger" : ""} 
                    ${this.isValid && this.alert.type == 'success' ? "success" : ""}`}>
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
                        <span class="icon-bar">
                            {this.value.length != 0 && (
                                <eui-icon
                                    key="x-mark"
                                    name='x-mark'
                                    onClick={this.resetInput}
                                    type='solid'
                                    class={`clear-button`}
                                ></eui-icon>
                            )}
                            {this.type == "password" && (
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
                        </span>
                    </span>
                    {(!this.isValid && this.alert.type == 'danger') && (
                        <span class="alert danger">
                            <eui-icon name='exclamation-triangle' type='solid'></eui-icon>
                            <p class="alert-text">{this.alert.message}</p>
                        </span>
                    )}
                    {(this.isValid && this.alert.type == 'success') && (
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
