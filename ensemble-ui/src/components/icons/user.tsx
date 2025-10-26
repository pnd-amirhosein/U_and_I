import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-user',
  shadow: false,
})
export class EUIIconUser {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.50003 6C7.50003 3.51472 9.51474 1.5 12 1.5C14.4853 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4853 10.5 12 10.5C9.51474 10.5 7.50003 8.48528 7.50003 6Z" fill="#0F172A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75127 20.1053C3.82861 15.6156 7.49201 12 12 12C16.5081 12 20.1716 15.6157 20.2488 20.1056C20.2539 20.4034 20.0824 20.676 19.8117 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21389 22.5 6.56746 21.8917 4.18835 20.7999C3.91768 20.6757 3.74614 20.4031 3.75127 20.1053Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 6C15.75 8.07107 14.0711 9.75 12 9.75C9.92896 9.75 8.25002 8.07107 8.25002 6C8.25002 3.92893 9.92896 2.25 12 2.25C14.0711 2.25 15.75 3.92893 15.75 6Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.50116 20.1182C4.57146 16.0369 7.9019 12.75 12 12.75C16.0983 12.75 19.4287 16.0371 19.4989 20.1185C17.2161 21.166 14.6764 21.75 12.0003 21.75C9.32402 21.75 6.78412 21.1659 4.50116 20.1182Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8Z" fill="#0F172A"/>
<path d="M3.46517 14.4935C3.27029 15.0016 3.44435 15.571 3.8742 15.9046C5.56656 17.218 7.69202 18 10.0001 18C12.3106 18 14.438 17.2164 16.1312 15.9006C16.5608 15.5667 16.7345 14.9971 16.5393 14.4892C15.5301 11.8635 12.9842 10 10.0031 10C7.02032 10 4.47329 11.8656 3.46517 14.4935Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" fill="#0F172A"/>
<path d="M12.7347 14C13.3531 14 13.8275 13.439 13.607 12.8613C12.7455 10.6036 10.5597 9 7.99942 9C5.43913 9 3.25338 10.6036 2.39182 12.8613C2.17134 13.439 2.64575 14 3.26412 14H12.7347Z" fill="#0F172A"/>
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
