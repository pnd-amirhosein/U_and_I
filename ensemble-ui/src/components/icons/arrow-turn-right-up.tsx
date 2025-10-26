import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-right-up',
  shadow: false,
})
export class EUIIconArrowTurnRightUp {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.73926 20.2495C3.73926 19.8353 4.07506 19.4995 4.48929 19.4995L14.9902 19.4995L14.9902 5.56056L12.5202 8.03024C12.2273 8.32312 11.7524 8.3231 11.4595 8.03018C11.1666 7.73727 11.1667 7.26239 11.4596 6.96951L15.2099 3.21964C15.5028 2.92677 15.9777 2.92677 16.2706 3.21964L20.021 6.96951C20.3139 7.26239 20.3139 7.73727 20.021 8.03018C19.7281 8.3231 19.2532 8.32312 18.9603 8.03024L16.4903 5.56056L16.4903 20.2495C16.4903 20.6637 16.1545 20.9995 15.7403 20.9995L4.48929 20.9995C4.07506 20.9995 3.73926 20.6637 3.73926 20.2495Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9899 7.49976L15.7402 3.74989M15.7402 3.74989L19.4906 7.49976M15.7402 3.74989L15.7402 20.2494L4.48926 20.2494" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 16.25C3 15.8358 3.33579 15.5 3.75 15.5H11.25L11.25 4.56066L9.28033 6.53033C8.98744 6.82322 8.51256 6.82322 8.21967 6.53033C7.92678 6.23744 7.92678 5.76256 8.21967 5.46967L11.4697 2.21967C11.7626 1.92678 12.2374 1.92678 12.5303 2.21967L15.7803 5.46967C16.0732 5.76256 16.0732 6.23744 15.7803 6.53033C15.4874 6.82322 15.0126 6.82322 14.7197 6.53033L12.75 4.56066L12.75 16.25C12.75 16.6642 12.4142 17 12 17H3.75C3.33579 17 3 16.6642 3 16.25Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H9.25L9.25 4.56066L8.28033 5.53033C7.98744 5.82322 7.51256 5.82322 7.21967 5.53033C6.92678 5.23744 6.92678 4.76256 7.21967 4.46967L9.46967 2.21967C9.76256 1.92678 10.2374 1.92678 10.5303 2.21967L12.7803 4.46967C13.0732 4.76256 13.0732 5.23744 12.7803 5.53033C12.4874 5.82322 12.0126 5.82322 11.7197 5.53033L10.75 4.56066V13.25C10.75 13.6642 10.4142 14 10 14H2.75C2.33579 14 2 13.6642 2 13.25Z" fill="black"/>
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
