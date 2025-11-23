import { Component, Prop, h, Host, Element, Watch, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'eui-paginator',
    styleUrl: "./paginator.scss",
    shadow: false,
})
export class EUIPaginator {
    @Element() hostEl!: HTMLElement;

    @Prop() styleValue?: string;
    @Prop() defaultCurrentPage: number = 1;
    @Prop() totalPages: number = 1;
    @Prop() disabled: boolean = false;

    @State() paginatorFormat: (number | string)[] = [];

    @Event() currentPage?: EventEmitter<any>;

    componentWillLoad() {
        this.paginatorFormat = this.getPagination(this.totalPages, this.defaultCurrentPage);
        if (this.styleValue) {
            this.hostEl.setAttribute('style', this.styleValue);
        }
    }

    getPagination(
        totalPages: number,
        defaultCurrentPage: number
    ): (number | "...")[] {

        if (totalPages <= 1) return [1];
        defaultCurrentPage = Math.max(1, Math.min(defaultCurrentPage, totalPages));

        const pages: (number | "...")[] = [];

        pages.push(1);

        if (defaultCurrentPage > 3) {
            pages.push("...");
        }

        const start = Math.max(2, defaultCurrentPage - 1);
        const end = Math.min(totalPages - 1, defaultCurrentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (defaultCurrentPage < totalPages - 2) {
            pages.push("...");
        }

        if (totalPages > 1) pages.push(totalPages);

        return pages;
    }

    @Watch('defaultCurrentPage')
    @Watch('totalPages')
    nameOrTypeChanged() {
        this.paginatorFormat = this.getPagination(this.totalPages, this.defaultCurrentPage);
    }

    changePage(item: number) {
        if (this.disabled) return;
        this.defaultCurrentPage = item;
        this.currentPage?.emit(item)
    }

    previous(item: number) {
        if (item == 1) return;
        this.changePage(item - 1)
    }
    next(item: number) {
        if (item == this.totalPages) return
        this.changePage(item + 1)
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr => !['defaultCurrentPage', 'variant', 'mode', 'class'].includes(attr.name))
            .reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);

        return (
            <Host>
                {this.paginatorFormat && (
                    <div
                        {...attrs}
                        class={{
                            pg: true,
                            [`pg--disabled`]: this.disabled == true
                        }}
                    >
                        <div class={`item previous-button ${+this.defaultCurrentPage == 1 ? "disable" : ""}`} onClick={() => { this.previous(+this.defaultCurrentPage) }}>
                            <eui-icon name="chevron-left" type="mini" />
                        </div>

                        {this.paginatorFormat.map(item => (
                            <div class={item === "..." ? "item separator" : `item number ${item == this.defaultCurrentPage ? "active" : ""}`}
                                onClick={() => { this.changePage(+item) }}>
                                {item === "..." ?
                                    <span class="separator-box"><span></span><span></span><span></span></span>
                                    :
                                    <span>{item}</span>
                                }
                            </div>
                        ))}

                        <div class={`item next-button ${+this.defaultCurrentPage == this.totalPages ? "disable" : ""}`} onClick={() => { this.next(+this.defaultCurrentPage) }}>
                            <eui-icon name="chevron-right" type="mini" />
                        </div>
                    </div>
                )}
            </Host>
        );
    }
}