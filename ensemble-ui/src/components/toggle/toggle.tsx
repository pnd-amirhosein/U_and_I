// import { Component, Prop, h, Host, Element, State, Event, EventEmitter } from '@stencil/core';
// import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';

// @Component({
//     tag: 'eui-toggle',
//     styleUrl: "./toggle.scss",
//     shadow: false,
// })
// export class EUIToggle {
//     @Element() hostEl!: HTMLElement;

//     @Prop({ attribute: "styleValue" }) styleValue?: string;
//     @Prop({ attribute: "selectedValue" }) selectedValue: 0 | 1 = 0;
//     @Prop() disabled: boolean = false;

//     @State() currentValue: 0 | 1 = 0

//     @Event() valueChanged?: EventEmitter<any>

//     componentWillLoad() {
//         this.currentValue = this.selectedValue
//     }

//     selectChanged = (index: number) => {
//         console.log("298374983274987", index);

//         this.valueChanged?.emit(this.currentValue)
//     }

//     render() {

//         const attrs = Array.from(this.hostEl.attributes)
//             .filter(attr => !['data', 'class', 'stylevalue'].includes(attr.name))
//             .reduce((acc, attr) => {
//                 acc[attr.name] = attr.value;
//                 return acc;
//             }, {} as Record<string, string>);

//         return (
//             <Host>
//                 <div
//                     style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
//                     {...attrs}
//                     class={{
//                         tgl: true,
//                         [`tgl--disabled`]: this.disabled,
//                     }}
//                 >
//                     <div class="island"></div>
//                     <div class="first" onClick={() => this.selectChanged(0)}>
//                         <slot name="first" />
//                     </div>
//                     <div class="second" onClick={() => this.selectChanged(1)}>
//                         <slot name="second" />
//                     </div>
//                 </div>
//             </Host>
//         );
//     }
// }

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

        if (this.disabled)
            return;

        if (this.data[index]?.disabled)
            return;

        this.value = index;

        this.moveIsland();

        this.valueChanged.emit(index);
    }

    private moveIsland() {

        const selected = this.itemRefs[this.value];

        if (!selected)
            return;

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
                    {...attrs}
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

                        <div

                            ref={el => {
                                if (el)
                                    this.itemRefs[index] = el;
                            }}

                            class={{
                                "item": true,
                                "selected": this.value === index,
                                "disabled": item.disabled ?? false
                            }}

                            onClick={() => this.select(index)}
                        >

                            {item.icon &&
                                <eui-icon
                                    name={item.icon}
                                    type="mini"
                                />
                            }

                            <span>
                                {item.text}
                            </span>

                        </div>

                    ))}

                </div>

            </Host>

        );
    }

}