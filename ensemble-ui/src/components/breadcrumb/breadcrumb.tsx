import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { BreadcrumbData } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-breadcrumb',
    styleUrl: "./breadcrumb.scss",
    shadow: false,
})
export class EUIBreadcrumb {
    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() data?: BreadcrumbData[] = undefined;

    @Event() itemClick?: EventEmitter<BreadcrumbData>;

    itemClicked = (data: BreadcrumbData) => {
        if (data.action)
            data.action();

        this.itemClick?.emit(data)
    }

    render() {

        console.log(this.data);


        if (!this.data) return (<></>);

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['data', 'stylevalue'].includes(attr.name))
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
                        brd: true
                    }}
                >
                    {this.data.map((item, i) => {
                        return (<div class="brd--item" onClick={() => this.itemClicked(item)}>
                            {item.icon && (<div class="icon"><eui-icon name={item.icon} type="micro" class="hydrated" /></div>)}
                            <div class="brd--title">{item.title}</div>
                            {i + 1 != (this.data?.length ?? 0) && (<div class="icon"><eui-icon name="chevron-right" type="micro" class="hydrated" /></div>)}
                        </div>)
                    })}
                </div>
            </Host>
        );
    }
}