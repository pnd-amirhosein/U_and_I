import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-play-pause',
  shadow: false,
})
export class EUIIconPlayPause {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6.75C14.5858 6.75 14.25 7.08579 14.25 7.5V18C14.25 18.1989 14.329 18.3897 14.4697 18.5303C14.6103 18.671 14.8011 18.75 15 18.75H15.75C16.1642 18.75 16.5 18.4142 16.5 18V7.5C16.5 7.08579 16.1642 6.75 15.75 6.75H15Z" fill="#0F172A"/>
<path d="M20.25 6.75C19.8358 6.75 19.5 7.08579 19.5 7.5V18C19.5 18.4142 19.8358 18.75 20.25 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18L21.75 7.5C21.75 7.30109 21.671 7.11032 21.5303 6.96967C21.3897 6.82902 21.1989 6.75 21 6.75H20.25Z" fill="#0F172A"/>
<path d="M5.05526 7.06061C3.80528 6.34633 2.25 7.24889 2.25 8.68856V16.8114C2.25 18.2511 3.80528 19.1536 5.05526 18.4394L12.1628 14.3779C13.4224 13.6581 13.4224 11.8418 12.1628 11.122L5.05526 7.06061Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.5L21 18M15 7.5V18M3 16.8114V8.68858C3 7.82478 3.93317 7.28324 4.68316 7.7118L11.7906 11.7732C12.5464 12.2051 12.5464 13.2949 11.7906 13.7268L4.68316 17.7882C3.93317 18.2168 3 17.6752 3 16.8114Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 4C12.3358 4 12 4.33579 12 4.75V15.25C12 15.6642 12.3358 16 12.75 16H13.25C13.6642 16 14 15.6642 14 15.25V4.75C14 4.33579 13.6642 4 13.25 4H12.75Z" fill="#0F172A"/>
<path d="M17.75 4C17.3358 4 17 4.33579 17 4.75V15.25C17 15.6642 17.3358 16 17.75 16H18.25C18.6642 16 19 15.6642 19 15.25V4.75C19 4.33579 18.6642 4 18.25 4H17.75Z" fill="#0F172A"/>
<path d="M3.28824 4.81859C2.28891 4.20135 1 4.9202 1 6.09478V13.9053C1 15.0798 2.2889 15.7987 3.28824 15.1815L9.61101 11.2762C10.56 10.6901 10.56 9.30998 9.61101 8.72382L3.28824 4.81859Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4.80424C1 4.01881 1.86395 3.53996 2.53 3.95624L7.6432 7.152C8.26987 7.54366 8.26987 8.45633 7.6432 8.84799L2.53 12.0437C1.86395 12.46 1 11.9812 1 11.1957V4.80424Z" fill="#0F172A"/>
<path d="M13.5 4.49999C13.5 4.22385 13.7239 3.99999 14 3.99999H14.5C14.7761 3.99999 15 4.22385 15 4.49999V11.5C15 11.7761 14.7761 12 14.5 12H14C13.7239 12 13.5 11.7761 13.5 11.5V4.49999Z" fill="#0F172A"/>
<path d="M10.5 3.99999C10.2239 3.99999 10 4.22385 10 4.49999V11.5C10 11.7761 10.2239 12 10.5 12H11C11.2761 12 11.5 11.7761 11.5 11.5V4.49999C11.5 4.22385 11.2761 3.99999 11 3.99999H10.5Z" fill="#0F172A"/>
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
