import { Component, Prop, h, Host, Element, State, EventEmitter, Event, Watch } from '@stencil/core';

@Component({
    tag: 'eui-checkbox',
    styleUrl: './checkbox.scss',
    shadow: false,
})
export class EUICheckbox {
    @Element() hostEl!: HTMLElement;

    @Prop({ mutable: true }) value: 'null' | 'false' | 'partial' | 'true' = 'null';
    @Prop() states: Array<'null' | 'false' | 'partial' | 'true'> = ['null', 'false', 'partial', 'true'];
    @Prop() size: "sm" | "md" | "lg" = "md"
    @Prop() mode: "fill" | "outline" = "fill"

    @Event() valueChange!: EventEmitter<'null' | 'false' | 'partial' | 'true'>;

    @State() currentIcon: string = '';

    /** Watch external value changes */
    @Watch('value')
    valueChanged() {
        this.updateIcon();
    }

    /** Update icon based on current value */
    private updateIcon() {
        const defaultIcons = {
            null: '',
            false: 'x-mark',
            partial: 'minus',
            true: 'check',
        };
        this.currentIcon = defaultIcons[this.value];
    }

    /** Cycle to next state on click */
    private toggle = () => {
        const currentIndex = this.states.indexOf(this.value);
        const nextIndex = (currentIndex + 1) % this.states.length;
        this.value = this.states[nextIndex];

        this.valueChange.emit(this.value);
        this.updateIcon();

        // Native change event for forms
        this.hostEl.dispatchEvent(
            new CustomEvent('change', { bubbles: true, composed: true })
        );
    };

    componentWillLoad() {
        this.updateIcon();
    }

    render() {
        // Grab all native attributes except props we handle
        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['value', 'states', 'class', 'size', 'mode'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        // Map our value to proper aria-checked
        const ariaChecked =
            this.value === 'true' ? 'true' :
                this.value === 'false' ? 'false' :
                    'mixed';

        return (
            <Host>
                <label
                    tabindex={0}
                    class={{
                        chk: true,
                        [`chk--${this.size}`]: true,
                        [`chk--${this.value}`]: true,
                        [`chk--${this.mode}`]: true,
                    }}
                    role="checkbox"
                    aria-checked={this.value === 'true' ? 'true' : this.value === 'false' ? 'false' : 'mixed'}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault();   // prevent page scrolling on space
                            this.toggle();
                        }
                    }}
                >
                    <input
                        type="checkbox"
                        checked={this.value === 'true'}
                        {...attrs}
                        aria-checked={ariaChecked}
                        onClick={this.toggle}
                    />
                    <span class="checkbox-custom">
                        {this.currentIcon && <eui-icon name={this.currentIcon} type="solid" />}
                    </span>
                    <slot></slot>
                </label>
            </Host>
        );
    }
}
