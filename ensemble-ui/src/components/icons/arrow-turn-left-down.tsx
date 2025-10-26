import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-left-down',
  shadow: false,
})
export class EUIIconArrowTurnLeftDown {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2407 3.75001C20.2407 4.16423 19.9049 4.50002 19.4907 4.50002L8.98975 4.50002L8.98975 18.4389L11.4597 15.9693C11.7527 15.6764 12.2276 15.6764 12.5205 15.9693C12.8133 16.2622 12.8133 16.7371 12.5204 17.03L8.77004 20.7799C8.47714 21.0727 8.00228 21.0727 7.70938 20.7799L3.95902 17.03C3.6661 16.7371 3.66608 16.2622 3.95897 15.9693C4.25186 15.6764 4.72676 15.6764 5.01968 15.9693L7.48968 18.4389L7.48968 3.75001C7.48968 3.33579 7.82548 3 8.23971 3L19.4907 3C19.9049 3 20.2407 3.33579 20.2407 3.75001Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9901 16.4996L8.23975 20.2495M8.23975 20.2495L4.48939 16.4996M8.23975 20.2495L8.23975 3.75L19.4907 3.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.75C16 4.16421 15.6642 4.5 15.25 4.5L7.75 4.5L7.75 15.4393L9.71967 13.4697C10.0126 13.1768 10.4874 13.1768 10.7803 13.4697C11.0732 13.7626 11.0732 14.2374 10.7803 14.5303L7.53033 17.7803C7.23744 18.0732 6.76256 18.0732 6.46967 17.7803L3.21967 14.5303C2.92678 14.2374 2.92678 13.7626 3.21967 13.4697C3.51256 13.1768 3.98744 13.1768 4.28033 13.4697L6.25 15.4393L6.25 3.75C6.25 3.33579 6.58579 3 7 3L15.25 3C15.6642 3 16 3.33579 16 3.75Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 2.21967C5.61032 2.07902 5.80109 2 6 2H13.25C13.6642 2 14 2.33579 14 2.75C14 3.16421 13.6642 3.5 13.25 3.5H6.75L6.75 11.4393L7.71967 10.4697C8.01256 10.1768 8.48744 10.1768 8.78033 10.4697C9.07322 10.7626 9.07322 11.2374 8.78033 11.5303L6.53033 13.7803C6.23744 14.0732 5.76256 14.0732 5.46967 13.7803L3.21967 11.5303C2.92678 11.2374 2.92678 10.7626 3.21967 10.4697C3.51256 10.1768 3.98744 10.1768 4.28033 10.4697L5.25 11.4393L5.25 2.75C5.25 2.55109 5.32902 2.36032 5.46967 2.21967Z" fill="black"/>
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
