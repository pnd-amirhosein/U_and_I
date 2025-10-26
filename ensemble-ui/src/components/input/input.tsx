import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
    tag: 'eui-input',
    styleUrl: "./input.scss",
    shadow: false,
})
export class EUIInput {
    @Element() hostEl!: HTMLElement;

    /** Style mode of the input */
    @Prop() mode: "normal" | "outline" | "text-input" = "normal";
    @Prop() type: HTMLInputElement['type'] = 'text';

    render() {

        console.log('--- EUI-input RENDER STATE ---');
        console.log('Props:', {
            mode: this.mode,
        });
        // console.log('Forwarded Attrs:', attrs);
        console.log('Host Element:', this.hostEl);

        // Forward all extra attributes on <eui-input> to the inner <input>
        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['size', 'variant', 'mode', 'class', 'placeHoder', 'placeholder'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                console.log("Yoohoo! I cannot found a password!");
                return acc;
            }, {} as Record<string, string>);

        if (this.type == "password") {
            console.log("Yoohoo! I found a password!");
        }



        return (
            <Host>
                <input
                    placeholder={this.type === "password" ? "dummy" : "undummy"}
                    type={this.type}
                    {...attrs}
                    class={{
                        input: true,
                        [`input--${this.mode}`]: this.mode !== 'normal',
                    }}
                >
                    <slot />
                </input>
            </Host>
        );
    }
}