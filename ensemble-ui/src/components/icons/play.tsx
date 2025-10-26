import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-play',
  shadow: false,
})
export class EUIIconPlay {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.6527C4.5 4.22656 6.029 3.32251 7.2786 4.00979L18.8192 10.3571C20.1144 11.0695 20.1144 12.9306 18.8192 13.6429L7.2786 19.9902C6.029 20.6775 4.5 19.7735 4.5 18.3473V5.6527Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25 5.65266C5.25 4.79699 6.1674 4.25455 6.91716 4.66692L18.4577 11.0142C19.2349 11.4417 19.2349 12.5583 18.4577 12.9857L6.91716 19.333C6.1674 19.7454 5.25 19.203 5.25 18.3473V5.65266Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29995 2.84058C5.3011 2.21087 4 2.92869 4 4.10947V15.8906C4 17.0714 5.3011 17.7892 6.29995 17.1595L15.6436 11.2689C16.577 10.6805 16.577 9.3196 15.6436 8.73115L6.29995 2.84058Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.73251C3 2.54887 4.30673 1.83155 5.30531 2.46701L12.0114 6.7345C12.9376 7.32393 12.9376 8.67606 12.0114 9.26549L5.30532 13.533C4.30673 14.1684 3 13.4511 3 12.2675V3.73251Z" fill="#0F172A"/>
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
