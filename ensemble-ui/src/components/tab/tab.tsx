import { Component, Prop, h, Host, Element, State, Event, EventEmitter } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { TabData } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-tab',
    styleUrl: "./tab.scss",
    shadow: false,
})
export class EUITab {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() disabled: boolean = false;
    @Prop() collapse: boolean = false;
    @Prop() data: TabData[] = [];
    @Prop({ attribute: "selectedTab" }) selectedTab: number = 0;

    @State() currentTab: number = 0;

    @Event() itemSelected?: EventEmitter<any>;

    changeSelected = (i: number) => {
        if (this.disabled) return;
        this.currentTab = i;
        this.itemSelected?.emit(this.currentTab);
    }

    componentWillLoad() {
        this.currentTab = this.selectedTab
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['disabled', 'collapse', 'data', 'class', 'stylevalue'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                <div
                    style={this.styleValue ? parseStyleString(this.styleValue) : undefined}
                    {...attrs}
                    class={{
                        tb: true,
                        [`tb--disabled`]: this.disabled,
                        [`tb--collapse`]: this.collapse,
                    }}
                >
                    {this.data && this.data.map((item, i) => {

                        const selected = i == this.currentTab;

                        return (
                            <div class={`tab-item ${selected ? "selected-tab" : ""}`} onClick={() => this.changeSelected(i)}>
                                {item.Icon && (<div class="icon"><eui-icon name={item.Icon} type="outline" class="hydrated" /></div>)}
                                <div class="title">{item.Title}</div>
                                {item.badgeCounter && (<div class="badge"><eui-badge type="number" color={selected ? "success" : "pending"}>{item.badgeCounter}</eui-badge></div>)}
                            </div>
                        )
                    })}
                </div>
            </Host>
        );
    }
}