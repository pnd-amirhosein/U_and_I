import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-slash',
  shadow: false,
})
export class EUIIconSlash {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2563 3.04219C15.6455 3.18375 15.8464 3.6141 15.7048 4.00339L9.70484 20.5038C9.56328 20.8931 9.13295 21.0939 8.74366 20.9524C8.35438 20.8108 8.15356 20.3804 8.29512 19.9911L14.2951 3.49075C14.4366 3.10145 14.867 2.90063 15.2563 3.04219Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20.2475L15 3.74707" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5282 3.04743C12.9175 3.18899 13.1183 3.61931 12.9767 4.00859L8.43283 16.5043C8.29128 16.8936 7.86096 17.0944 7.47168 16.9529C7.0824 16.8113 6.88159 16.381 7.02314 15.9917L11.567 3.49597C11.7086 3.1067 12.1389 2.90588 12.5282 3.04743Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0741 2.04707C10.4634 2.18862 10.6642 2.61895 10.5227 3.00822L6.70505 13.5067C6.56349 13.896 6.13317 14.0968 5.7439 13.9552C5.35462 13.8137 5.1538 13.3834 5.29536 12.9941L9.11299 2.49561C9.25454 2.10633 9.68486 1.90551 10.0741 2.04707Z" fill="black"/>
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
