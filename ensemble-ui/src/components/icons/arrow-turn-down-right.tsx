import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-down-right',
  shadow: false,
})
export class EUIIconArrowTurnDownRight {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.74049 3.74939C4.15471 3.74939 4.4905 4.08519 4.4905 4.49943V15.0004H18.4294L15.9598 12.5304C15.6669 12.2374 15.6669 11.7626 15.9598 11.4697C16.2527 11.1768 16.7276 11.1768 17.0205 11.4697L20.7704 15.2201C21.0632 15.513 21.0632 15.9878 20.7704 16.2807L17.0205 20.0311C16.7276 20.324 16.2527 20.324 15.9598 20.0311C15.6669 19.7382 15.6669 19.2634 15.9598 18.9704L18.4294 16.5004H3.74049C3.32627 16.5004 2.99048 16.1646 2.99048 15.7504V4.49943C2.99048 4.08519 3.32627 3.74939 3.74049 3.74939Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4901 12L20.24 15.7504M20.24 15.7504L16.4901 19.5007M20.24 15.7504H3.74048V4.49939" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V11.25H15.4393L13.4697 9.28033C13.1768 8.98744 13.1768 8.51256 13.4697 8.21967C13.7626 7.92678 14.2374 7.92678 14.5303 8.21967L17.7803 11.4697C18.0732 11.7626 18.0732 12.2374 17.7803 12.5303L14.5303 15.7803C14.2374 16.0732 13.7626 16.0732 13.4697 15.7803C13.1768 15.4874 13.1768 15.0126 13.4697 14.7197L15.4393 12.75H3.75C3.33579 12.75 3 12.4142 3 12V3.75C3 3.33579 3.33579 3 3.75 3Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V9.25H11.4393L10.4697 8.28033C10.1768 7.98744 10.1768 7.51256 10.4697 7.21967C10.7626 6.92678 11.2374 6.92678 11.5303 7.21967L13.7803 9.46967C14.0732 9.76256 14.0732 10.2374 13.7803 10.5303L11.5303 12.7803C11.2374 13.0732 10.7626 13.0732 10.4697 12.7803C10.1768 12.4874 10.1768 12.0126 10.4697 11.7197L11.4393 10.75H2.75C2.33579 10.75 2 10.4142 2 10V2.75C2 2.33579 2.33579 2 2.75 2Z" fill="black"/>
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
