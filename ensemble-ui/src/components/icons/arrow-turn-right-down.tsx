import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-turn-right-down',
  shadow: false,
})
export class EUIIconArrowTurnRightDown {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.73926 3.75001C3.73926 4.16423 4.07506 4.50002 4.48929 4.50002L14.9902 4.50002L14.9902 18.4389L12.5202 15.9693C12.2273 15.6764 11.7524 15.6764 11.4595 15.9693C11.1666 16.2622 11.1667 16.7371 11.4596 17.03L15.2099 20.7799C15.5028 21.0727 15.9777 21.0727 16.2706 20.7799L20.021 17.03C20.3139 16.7371 20.3139 16.2622 20.021 15.9693C19.7281 15.6764 19.2532 15.6764 18.9603 15.9693L16.4903 18.4389L16.4903 3.75001C16.4903 3.33579 16.1545 3 15.7403 3L4.48929 3C4.07506 3 3.73926 3.33579 3.73926 3.75001Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9899 16.4996L15.7402 20.2495M15.7402 20.2495L19.4906 16.4996M15.7402 20.2495L15.7402 3.75L4.48926 3.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 4.16421 3.33579 4.5 3.75 4.5L11.25 4.5L11.25 15.4393L9.28033 13.4697C8.98744 13.1768 8.51256 13.1768 8.21967 13.4697C7.92678 13.7626 7.92678 14.2374 8.21967 14.5303L11.4697 17.7803C11.7626 18.0732 12.2374 18.0732 12.5303 17.7803L15.7803 14.5303C16.0732 14.2374 16.0732 13.7626 15.7803 13.4697C15.4874 13.1768 15.0126 13.1768 14.7197 13.4697L12.75 15.4393L12.75 3.75C12.75 3.33579 12.4142 3 12 3L3.75 3C3.33579 3 3 3.33579 3 3.75Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.75C2 3.16421 2.33579 3.5 2.75 3.5L9.25 3.5L9.25 11.4393L8.28033 10.4697C7.98744 10.1768 7.51256 10.1768 7.21967 10.4697C6.92678 10.7626 6.92678 11.2374 7.21967 11.5303L9.46967 13.7803C9.76256 14.0732 10.2374 14.0732 10.5303 13.7803L12.7803 11.5303C13.0732 11.2374 13.0732 10.7626 12.7803 10.4697C12.4874 10.1768 12.0126 10.1768 11.7197 10.4697L10.75 11.4393V2.75C10.75 2.33579 10.4142 2 10 2L2.75 2C2.33579 2 2 2.33579 2 2.75Z" fill="black"/>
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
