import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-view-columns',
  shadow: false,
})
export class EUIIconViewColumns {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3.75H9V20.25H15V3.75Z" fill="#0F172A"/>
<path d="M16.5 20.25H19.875C20.9105 20.25 21.75 19.4105 21.75 18.375V5.625C21.75 4.58947 20.9105 3.75 19.875 3.75H16.5V20.25Z" fill="#0F172A"/>
<path d="M4.125 3.75H7.5V20.25H4.125C3.08947 20.25 2.25 19.4105 2.25 18.375V5.625C2.25 4.58947 3.08947 3.75 4.125 3.75Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.5V19.5M15 4.5V19.5M4.125 19.5H19.875C20.4963 19.5 21 18.9963 21 18.375V5.625C21 5.00368 20.4963 4.5 19.875 4.5H4.125C3.50368 4.5 3 5.00368 3 5.625V18.375C3 18.9963 3.50368 19.5 4.125 19.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17H16.75C17.9926 17 19 15.9926 19 14.75V5.25C19 4.00736 17.9926 3 16.75 3H14V17Z" fill="#0F172A"/>
<path d="M12.5 3H7.5V17H12.5V3Z" fill="#0F172A"/>
<path d="M3.25 3H6V17H3.25C2.00736 17 1 15.9926 1 14.75V5.25C1 4.00736 2.00736 3 3.25 3Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.83594 3H6.16602V13H9.83594V3Z" fill="#0F172A"/>
<path d="M11.3359 13H13.5C14.3284 13 15 12.3284 15 11.5V4.5C15 3.67157 14.3284 3 13.5 3H11.3359V13Z" fill="#0F172A"/>
<path d="M2.5 3H4.66602V13H2.5C1.67157 13 1 12.3284 1 11.5V4.5C1 3.67157 1.67157 3 2.5 3Z" fill="#0F172A"/>
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
