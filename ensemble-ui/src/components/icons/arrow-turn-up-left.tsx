import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-up-left',
  shadow: false,
})
export class EUIIconArrowTurnUpLeft {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2397 20.2505C19.8255 20.2505 19.4897 19.9147 19.4897 19.5005L19.4897 8.99951L5.5508 8.99951L8.02047 11.4695C8.31336 11.7624 8.31333 12.2373 8.02042 12.5302C7.72751 12.8231 7.25263 12.8231 6.95974 12.5302L3.20987 8.77981C2.91701 8.4869 2.91701 8.01205 3.20987 7.71915L6.95975 3.96879C7.25263 3.67586 7.72751 3.67584 8.02042 3.96873C8.31333 4.26163 8.31336 4.73652 8.02047 5.02944L5.5508 7.49944L20.2397 7.49944C20.654 7.49944 20.9897 7.83524 20.9897 8.24948L20.9897 19.5005C20.9897 19.9147 20.654 20.2505 20.2397 20.2505Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49012 11.9998L3.74025 8.24939M3.74025 8.24939L7.49012 4.49903M3.74025 8.24939L20.2397 8.24939L20.2397 19.5004" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 17C15.8358 17 15.5 16.6642 15.5 16.25V8.75H4.56066L6.53033 10.7197C6.82322 11.0126 6.82322 11.4874 6.53033 11.7803C6.23744 12.0732 5.76256 12.0732 5.46967 11.7803L2.21967 8.53033C1.92678 8.23744 1.92678 7.76256 2.21967 7.46967L5.46967 4.21967C5.76256 3.92678 6.23744 3.92678 6.53033 4.21967C6.82322 4.51256 6.82322 4.98744 6.53033 5.28033L4.56066 7.25H16.25C16.6642 7.25 17 7.58579 17 8V16.25C17 16.6642 16.6642 17 16.25 17Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 14C12.8358 14 12.5 13.6642 12.5 13.25V6.75H4.56066L5.53033 7.71967C5.82322 8.01256 5.82322 8.48744 5.53033 8.78033C5.23744 9.07322 4.76256 9.07322 4.46967 8.78033L2.21967 6.53033C1.92678 6.23744 1.92678 5.76256 2.21967 5.46967L4.46967 3.21967C4.76256 2.92678 5.23744 2.92678 5.53033 3.21967C5.82322 3.51256 5.82322 3.98744 5.53033 4.28033L4.56066 5.25H13.25C13.6642 5.25 14 5.58579 14 6V13.25C14 13.6642 13.6642 14 13.25 14Z" fill="black"/>
</svg>
`;
      default:
        return '';
    }
  }

  render() {
    const svg = this.getSvg();
    const attrs = Array.from(this.hostEl.attributes)
      .filter(attr => !['type', 'class'].includes(attr.name))
      .reduce((acc:any, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {});
      
    return (
      <Host>
        <div {...attrs} innerHTML={svg}></div>
      </Host>
    );
  }
}
