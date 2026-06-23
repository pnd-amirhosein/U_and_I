import { Component, Prop, h, Host, Element } from '@stencil/core';
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
                        [`tb--${this.disabled}`]: true,
                        [`tb--${this.collapse}`]: true,
                    }}
                >
                    {this.data && this.data.map((item, i) => {

                        const selected = i == this.selectedTab;

                        return (
                            <div class={`tab-item ${selected ? "selected-tab" : ""}`}>
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