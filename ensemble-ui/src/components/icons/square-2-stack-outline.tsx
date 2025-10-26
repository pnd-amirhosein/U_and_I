import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-square-2-stack-outline',
  shadow: false,
})
export class EUIIconSquare2StackOutline {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 8.25V6C16.5 4.75736 15.4926 3.75 14.25 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M16.5 8.25H18C19.2426 8.25 20.25 9.25736 20.25 10.5V18C20.25 19.2426 19.2426 20.25 18 20.25H10.5C9.25736 20.25 8.25 19.2426 8.25 18V16.5M16.5 8.25H10.5C9.25736 8.25 8.25 9.25736 8.25 10.5V16.5" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 8.25V6C16.5 4.75736 15.4926 3.75 14.25 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M16.5 8.25H18C19.2426 8.25 20.25 9.25736 20.25 10.5V18C20.25 19.2426 19.2426 20.25 18 20.25H10.5C9.25736 20.25 8.25 19.2426 8.25 18V16.5M16.5 8.25H10.5C9.25736 8.25 8.25 9.25736 8.25 10.5V16.5" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 6.875V5C13.75 3.96447 12.9105 3.125 11.875 3.125H5C3.96447 3.125 3.125 3.96447 3.125 5V11.875C3.125 12.9105 3.96447 13.75 5 13.75H6.875M13.75 6.875H15C16.0355 6.875 16.875 7.71447 16.875 8.75V15C16.875 16.0355 16.0355 16.875 15 16.875H8.75C7.71447 16.875 6.875 16.0355 6.875 15V13.75M13.75 6.875H8.75C7.71447 6.875 6.875 7.71447 6.875 8.75V13.75" stroke="#0F172A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5.5V4C11 3.17157 10.3284 2.5 9.5 2.5H4C3.17157 2.5 2.5 3.17157 2.5 4V9.5C2.5 10.3284 3.17157 11 4 11H5.5M11 5.5H12C12.8284 5.5 13.5 6.17157 13.5 7V12C13.5 12.8284 12.8284 13.5 12 13.5H7C6.17157 13.5 5.5 12.8284 5.5 12V11M11 5.5H7C6.17157 5.5 5.5 6.17157 5.5 7V11" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round"/>
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
