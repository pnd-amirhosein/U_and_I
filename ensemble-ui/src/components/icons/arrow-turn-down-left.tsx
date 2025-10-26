import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-down-left',
  shadow: false,
})
export class EUIIconArrowTurnDownLeft {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.24 3.74939C19.8258 3.74939 19.49 4.08519 19.49 4.49943V15.0004H5.55104L8.02072 12.5304C8.3136 12.2374 8.31358 11.7626 8.02066 11.4697C7.72775 11.1768 7.25287 11.1768 6.95999 11.4697L3.21011 15.2201C2.91725 15.513 2.91725 15.9878 3.21011 16.2807L6.95999 20.0311C7.25287 20.324 7.72775 20.324 8.02066 20.0311C8.31358 19.7382 8.3136 19.2634 8.02072 18.9704L5.55104 16.5004H20.24C20.6542 16.5004 20.99 16.1646 20.99 15.7504V4.49943C20.99 4.08519 20.6542 3.74939 20.24 3.74939Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49012 11.9996L3.74025 15.75M3.74025 15.75L7.49012 19.5004M3.74025 15.75H20.2397V4.49902" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 3C15.8358 3 15.5 3.33579 15.5 3.75V11.25H4.56066L6.53033 9.28033C6.82322 8.98744 6.82322 8.51256 6.53033 8.21967C6.23744 7.92678 5.76256 7.92678 5.46967 8.21967L2.21967 11.4697C1.92678 11.7626 1.92678 12.2374 2.21967 12.5303L5.46967 15.7803C5.76256 16.0732 6.23744 16.0732 6.53033 15.7803C6.82322 15.4874 6.82322 15.0126 6.53033 14.7197L4.56066 12.75H16.25C16.6642 12.75 17 12.4142 17 12V3.75C17 3.33579 16.6642 3 16.25 3Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2C12.8358 2 12.5 2.33579 12.5 2.75V9.25H4.56066L5.53033 8.28033C5.82322 7.98744 5.82322 7.51256 5.53033 7.21967C5.23744 6.92678 4.76256 6.92678 4.46967 7.21967L2.21967 9.46967C1.92678 9.76256 1.92678 10.2374 2.21967 10.5303L4.46967 12.7803C4.76256 13.0732 5.23744 13.0732 5.53033 12.7803C5.82322 12.4874 5.82322 12.0126 5.53033 11.7197L4.56066 10.75H13.25C13.6642 10.75 14 10.4142 14 10V2.75C14 2.33579 13.6642 2 13.25 2Z" fill="black"/>
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
