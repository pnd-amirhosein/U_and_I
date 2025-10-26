import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-up-heavy',
  shadow: false,
})
export class EUIIconArrowUpHeavy {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.58579 11.4142C1.80474 10.6332 1.80474 9.36684 2.58579 8.58579L10.5858 0.585787C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585787L21.4142 8.58579C22.1953 9.36683 22.1953 10.6332 21.4142 11.4142C20.6332 12.1953 19.3668 12.1953 18.5858 11.4142L14 6.82843L14 22C14 23.1046 13.1046 24 12 24C10.8954 24 10 23.1046 10 22L10 6.82843L5.41421 11.4142C4.63317 12.1953 3.36683 12.1953 2.58579 11.4142Z" fill="#111827"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.58579 11.4142C1.80474 10.6332 1.80474 9.36684 2.58579 8.58579L10.5858 0.585787C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585787L21.4142 8.58579C22.1953 9.36683 22.1953 10.6332 21.4142 11.4142C20.6332 12.1953 19.3668 12.1953 18.5858 11.4142L14 6.82843L14 22C14 23.1046 13.1046 24 12 24C10.8954 24 10 23.1046 10 22L10 6.82843L5.41421 11.4142C4.63317 12.1953 3.36683 12.1953 2.58579 11.4142Z" fill="#111827"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.1549 9.51185C1.50403 8.86097 1.50403 7.8057 2.1549 7.15482L8.82157 0.488156C9.47244 -0.162719 10.5277 -0.162719 11.1786 0.488156L17.8453 7.15482C18.4961 7.8057 18.4961 8.86097 17.8453 9.51184C17.1944 10.1627 16.1391 10.1627 15.4882 9.51184L11.6667 5.69036L11.6667 18.3333C11.6667 19.2538 10.9206 20 10.0001 20C9.07961 20 8.33341 19.2538 8.33341 18.3333L8.33341 5.69036L4.51193 9.51185C3.86105 10.1627 2.80578 10.1627 2.1549 9.51185Z" fill="#111827"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.72378 7.60948C1.20308 7.08878 1.20308 6.24456 1.72378 5.72386L7.05711 0.390525C7.57781 -0.130175 8.42203 -0.130175 8.94273 0.390525L14.2761 5.72386C14.7968 6.24456 14.7968 7.08878 14.2761 7.60948C13.7554 8.13018 12.9111 8.13017 12.3904 7.60948L9.33325 4.55229L9.33325 14.6667C9.33325 15.403 8.7363 16 7.99992 16C7.26354 16 6.66658 15.403 6.66658 14.6667L6.66658 4.55229L3.60939 7.60948C3.0887 8.13018 2.24448 8.13018 1.72378 7.60948Z" fill="#111827"/>
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
