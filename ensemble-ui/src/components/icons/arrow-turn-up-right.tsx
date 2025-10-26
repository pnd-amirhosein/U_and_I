import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-up-right',
  shadow: false,
})
export class EUIIconArrowTurnUpRight {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.74 20.2501C4.15422 20.2501 4.49001 19.9143 4.49001 19.5001L4.49001 8.99915L18.4289 8.99915L15.9593 11.4691C15.6664 11.7621 15.6664 12.237 15.9593 12.5299C16.2522 12.8227 16.7271 12.8227 17.02 12.5298L20.7699 8.77944C21.0627 8.48654 21.0627 8.01168 20.7699 7.71878L17.02 3.96842C16.7271 3.6755 16.2522 3.67548 15.9593 3.96837C15.6664 4.26126 15.6664 4.73616 15.9593 5.02908L18.4289 7.49907L3.74 7.49908C3.32578 7.49908 2.98999 7.83488 2.98999 8.24911L2.98999 19.5001C2.98999 19.9143 3.32578 20.2501 3.74 20.2501Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4899 11.9998L20.2397 8.24939M20.2397 8.24939L16.4899 4.49903M20.2397 8.24939L3.74023 8.24939L3.74023 19.5004" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 17C4.16421 17 4.5 16.6642 4.5 16.25V8.75H15.4393L13.4697 10.7197C13.1768 11.0126 13.1768 11.4874 13.4697 11.7803C13.7626 12.0732 14.2374 12.0732 14.5303 11.7803L17.7803 8.53033C18.0732 8.23744 18.0732 7.76256 17.7803 7.46967L14.5303 4.21967C14.2374 3.92678 13.7626 3.92678 13.4697 4.21967C13.1768 4.51256 13.1768 4.98744 13.4697 5.28033L15.4393 7.25H3.75C3.33579 7.25 3 7.58579 3 8V16.25C3 16.6642 3.33579 17 3.75 17Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 14C3.16421 14 3.5 13.6642 3.5 13.25V6.75H11.4393L10.4697 7.71967C10.1768 8.01256 10.1768 8.48744 10.4697 8.78033C10.7626 9.07322 11.2374 9.07322 11.5303 8.78033L13.7803 6.53033C14.0732 6.23744 14.0732 5.76256 13.7803 5.46967L11.5303 3.21967C11.2374 2.92678 10.7626 2.92678 10.4697 3.21967C10.1768 3.51256 10.1768 3.98744 10.4697 4.28033L11.4393 5.25H2.75C2.33579 5.25 2 5.58579 2 6V13.25C2 13.6642 2.33579 14 2.75 14Z" fill="black"/>
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
