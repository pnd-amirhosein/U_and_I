import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-left-up',
  shadow: false,
})
export class EUIIconArrowTurnLeftUp {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2407 20.2495C20.2407 19.8353 19.9049 19.4995 19.4907 19.4995L8.98975 19.4995L8.98975 5.56056L11.4597 8.03024C11.7527 8.32312 12.2276 8.3231 12.5205 8.03018C12.8133 7.73727 12.8133 7.26239 12.5204 6.96951L8.77004 3.21964C8.47714 2.92677 8.00228 2.92677 7.70938 3.21964L3.95902 6.96951C3.6661 7.26239 3.66608 7.73727 3.95897 8.03018C4.25186 8.3231 4.72676 8.32312 5.01968 8.03024L7.48968 5.56056L7.48968 20.2495C7.48968 20.6637 7.82548 20.9995 8.23971 20.9995L19.4907 20.9995C19.9049 20.9995 20.2407 20.6637 20.2407 20.2495Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9901 7.49976L8.23975 3.74989M8.23975 3.74989L4.48939 7.49976M8.23975 3.74989L8.23975 20.2494L19.4907 20.2494" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.25C16 15.8358 15.6642 15.5 15.25 15.5H7.75L7.75 4.56066L9.71967 6.53033C10.0126 6.82322 10.4874 6.82322 10.7803 6.53033C11.0732 6.23744 11.0732 5.76256 10.7803 5.46967L7.53033 2.21967C7.23744 1.92678 6.76256 1.92678 6.46967 2.21967L3.21967 5.46967C2.92678 5.76256 2.92678 6.23744 3.21967 6.53033C3.51256 6.82322 3.98744 6.82322 4.28033 6.53033L6.25 4.56066L6.25 16.25C6.25 16.6642 6.58579 17 7 17H15.25C15.6642 17 16 16.6642 16 16.25Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 13.25C14 12.8358 13.6642 12.5 13.25 12.5H6.75L6.75 4.56066L7.71967 5.53033C8.01256 5.82322 8.48744 5.82322 8.78033 5.53033C9.07322 5.23744 9.07322 4.76256 8.78033 4.46967L6.53033 2.21967C6.23744 1.92678 5.76256 1.92678 5.46967 2.21967L3.21967 4.46967C2.92678 4.76256 2.92678 5.23744 3.21967 5.53033C3.51256 5.82322 3.98744 5.82322 4.28033 5.53033L5.25 4.56066L5.25 13.25C5.25 13.6642 5.58579 14 6 14H13.25C13.6642 14 14 13.6642 14 13.25Z" fill="black"/>
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
