import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-forward',
  shadow: false,
})
export class EUIIconForward {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.05526 7.06061C3.80528 6.34633 2.25 7.24889 2.25 8.68856V16.8114C2.25 18.2511 3.80528 19.1536 5.05526 18.4394L12 14.4709V16.8114C12 18.2511 13.5553 19.1536 14.8053 18.4394L21.9128 14.3779C23.1724 13.6581 23.1724 11.8418 21.9128 11.122L14.8053 7.06061C13.5553 6.34633 12 7.24889 12 8.68856V11.029L5.05526 7.06061Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8.68858C3 7.82478 3.93317 7.28324 4.68316 7.71181L11.7906 11.7732C12.5464 12.2051 12.5464 13.2949 11.7906 13.7268L4.68316 17.7882C3.93317 18.2168 3 17.6752 3 16.8114V8.68858Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 8.68858C12.75 7.82478 13.6832 7.28324 14.4332 7.71181L21.5406 11.7732C22.2964 12.2051 22.2964 13.2949 21.5406 13.7268L14.4332 17.7882C13.6832 18.2168 12.75 17.6752 12.75 16.8114V8.68858Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28824 4.81859C2.28891 4.20135 1 4.9202 1 6.09478V13.9053C1 15.0798 2.2889 15.7987 3.28824 15.1815L9.61101 11.2762C9.76598 11.1805 9.89564 11.0636 10 10.9325V13.9053C10 15.0798 11.2889 15.7987 12.2882 15.1815L18.611 11.2762C19.56 10.6901 19.56 9.30998 18.611 8.72382L12.2882 4.81859C11.2889 4.20135 10 4.9202 10 6.09478V9.06757C9.89564 8.93643 9.76598 8.81954 9.61101 8.72382L3.28824 4.81859Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.53 3.95633C1.86395 3.54005 1 4.0189 1 4.80433V11.1958C1 11.9813 1.86395 12.4601 2.53 12.0438L7.6432 8.84808C7.80276 8.74836 7.92169 8.61486 8 8.46479V11.1958C8 11.9813 8.86395 12.4601 9.53 12.0438L14.6432 8.84808C15.2699 8.45642 15.2699 7.54376 14.6432 7.15209L9.53 3.95633C8.86395 3.54005 8 4.0189 8 4.80433V7.53538C7.92169 7.38531 7.80276 7.25181 7.6432 7.15209L2.53 3.95633Z" fill="#0F172A"/>
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
