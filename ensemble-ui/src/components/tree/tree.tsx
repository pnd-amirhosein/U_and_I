import { Component, Prop, h, Host, Element, State } from '@stencil/core';
import { parseStyleString } from 'packages/core/utils/helpers/parseStyle';
import { TreeData } from 'packages/core/utils/helpers/types';

@Component({
    tag: 'eui-tree',
    styleUrl: './tree.scss',
    shadow: false,
})
export class EUITree {

    @Element() hostEl!: HTMLElement;

    @Prop({ attribute: "styleValue" }) styleValue?: string;
    @Prop() collapse = false;
    @Prop() data: TreeData[] = [];

    @State() private refresh = 0;
    @State() selected?: TreeData

    private expanded = new WeakSet<TreeData>();

    private isExpanded(node: TreeData) {

        if (!node.id) return true;
        return this.expanded.has(node);
    }

    private toggle(node: TreeData) {

        if (!node.Children)
            this.selected = node;

        if (this.collapse && node.Children?.length && node.id) {
            if (this.expanded.has(node))
                this.expanded.delete(node);
            else
                this.expanded.add(node);
            this.refresh++;
            return;
        }
        node.Action?.();

    }

    private renderNode(node: TreeData) {

        const selected = node == this.selected

        const expanded = !this.collapse || this.isExpanded(node);

        const hasChildren = !!node.Children?.length;

        return (
            <li>
                <div
                    class={{
                        "tree-item": true,
                        expanded,
                        "has-children": hasChildren,
                        "selected": selected
                    }}
                    onClick={() => this.toggle(node)}>

                    <span class="title">{node.Title}</span>
                    {this.collapse && hasChildren &&
                        <eui-icon class={{ chevron: true, expanded }} name="chevron-right" type="mini" />
                    }
                </div>
                {hasChildren &&
                    <ul
                        class={{
                            children: true,
                            expanded
                        }}>
                        {node.Children!.map(child =>
                            this.renderNode(child)
                        )}
                    </ul>
                }
            </li>
        );
    }

    render() {

        const attrs = Array.from(this.hostEl.attributes)
            .filter(attr =>
                !['collapse', 'data', 'class', 'stylevalue'].includes(attr.name)
            )
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
                        tre: true,
                        "tre--collapse": this.collapse
                    }}>

                    <ul class="tree">
                        {this.data.map(node =>
                            this.renderNode(node)
                        )}
                    </ul>
                </div>
            </Host>
        );
    }
}