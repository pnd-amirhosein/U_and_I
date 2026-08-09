import {
    Component,
    Prop,
    h,
    Host,
    Element,
    State,
    Event,
    EventEmitter,
    Watch
} from '@stencil/core';

import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

export interface ToggleItem {
    text: string;
    icon?: string;
    disabled?: boolean;
}

@Component({
    tag: 'eui-toggle',
    styleUrl: './toggle.scss',
    shadow: false,
})
export class EUIToggle {

    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() nativeAttrs?: Record<string, any>;
    @Prop() data: ToggleItem[] = [];
    @Prop({ mutable: true }) value = 0;
    @Prop() disabled = false;

    @State() islandX = 0;
    @State() islandWidth = 0;

    @Event() valueChanged!: EventEmitter<number>;

    private itemRefs: HTMLElement[] = [];

    componentDidLoad() {
        this.moveIsland();
    }

    @Watch("value")
    valueChangedWatcher() {
        requestAnimationFrame(() => this.moveIsland());
    }

    @Watch("data")
    dataChangedWatcher() {
        requestAnimationFrame(() => this.moveIsland());
    }

    private select(index: number) {

        if (this.disabled) return;
        if (this.data[index]?.disabled) return;

        this.value = index;
        this.moveIsland();
        this.valueChanged.emit(index);
    }

    private moveIsland() {
        const selected = this.itemRefs[this.value];
        if (!selected) return;
        this.islandX = selected.offsetLeft;
        this.islandWidth = selected.offsetWidth;
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['data', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (

            <Host>

                <div
                    {...attrs} {...this.nativeAttrs}
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    class={{
                        "tgl": true,
                        "tgl--disabled": this.disabled
                    }}
                >

                    <div
                        class="island"
                        style={{
                            transform: `translateX(${this.islandX}px)`,
                            width: `${this.islandWidth}px`
                        }}
                    />

                    {this.data.map((item, index) => (

                        <div ref={el => { if (el) this.itemRefs[index] = el; }}
                            class={{
                                "item": true,
                                "selected": this.value === index,
                                "disabled": item.disabled ?? false
                            }}
                            onClick={() => this.select(index)}>

                            {item.icon && <eui-icon name={item.icon} type="mini" />}
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </Host>
        );
    }
}