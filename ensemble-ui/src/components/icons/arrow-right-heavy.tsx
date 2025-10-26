import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-right-heavy',
  shadow: false,
})
export class EUIIconArrowRightHeavy {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5858 2.58579C13.3668 1.80474 14.6332 1.80474 15.4142 2.58579L23.4142 10.5858C24.1953 11.3668 24.1953 12.6332 23.4142 13.4142L15.4142 21.4142C14.6332 22.1953 13.3668 22.1953 12.5858 21.4142C11.8047 20.6332 11.8047 19.3668 12.5858 18.5858L17.1716 14L2 14C0.895431 14 -4.82823e-08 13.1046 0 12C4.82823e-08 10.8954 0.895431 10 2 10H17.1716L12.5858 5.41421C11.8047 4.63317 11.8047 3.36683 12.5858 2.58579Z" fill="#111827"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5858 2.58579C13.3668 1.80474 14.6332 1.80474 15.4142 2.58579L23.4142 10.5858C24.1953 11.3668 24.1953 12.6332 23.4142 13.4142L15.4142 21.4142C14.6332 22.1953 13.3668 22.1953 12.5858 21.4142C11.8047 20.6332 11.8047 19.3668 12.5858 18.5858L17.1716 14L2 14C0.895431 14 -4.82823e-08 13.1046 0 12C4.82823e-08 10.8954 0.895431 10 2 10H17.1716L12.5858 5.41421C11.8047 4.63317 11.8047 3.36683 12.5858 2.58579Z" fill="#111827"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4882 2.15483C11.139 1.50395 12.1943 1.50395 12.8452 2.15483L19.5118 8.82149C20.1627 9.47237 20.1627 10.5276 19.5118 11.1785L12.8452 17.8452C12.1943 18.4961 11.139 18.4961 10.4882 17.8452C9.83728 17.1943 9.83728 16.139 10.4882 15.4882L14.3096 11.6667L1.66667 11.6667C0.746193 11.6667 -4.02352e-08 10.9205 0 10C4.02352e-08 9.07953 0.746193 8.33334 1.66667 8.33334H14.3096L10.4882 4.51185C9.83728 3.86098 9.83728 2.8057 10.4882 2.15483Z" fill="#111827"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.39052 1.72385C8.91122 1.20315 9.75544 1.20315 10.2761 1.72385L15.6095 7.05719C16.1302 7.57788 16.1302 8.4221 15.6095 8.9428L10.2761 14.2761C9.75544 14.7968 8.91122 14.7968 8.39052 14.2761C7.86982 13.7554 7.86983 12.9112 8.39052 12.3905L11.4477 9.33333L1.33333 9.33333C0.596954 9.33333 -3.21882e-08 8.73637 0 7.99999C3.21882e-08 7.26361 0.596954 6.66666 1.33333 6.66666H11.4477L8.39052 3.60947C7.86982 3.08877 7.86983 2.24455 8.39052 1.72385Z" fill="#111827"/>
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
