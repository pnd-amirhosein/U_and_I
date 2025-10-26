import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-down-heavy',
  shadow: false,
})
export class EUIIconArrowDownHeavy {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4142 12.5858C22.1953 13.3668 22.1953 14.6332 21.4142 15.4142L13.4142 23.4142C12.6332 24.1953 11.3668 24.1953 10.5858 23.4142L2.58579 15.4142C1.80474 14.6332 1.80474 13.3668 2.58579 12.5858C3.36683 11.8047 4.63317 11.8047 5.41421 12.5858L10 17.1716V2C10 0.895431 10.8954 -9.65645e-08 12 0C13.1046 9.65645e-08 14 0.895431 14 2L14 17.1716L18.5858 12.5858C19.3668 11.8047 20.6332 11.8047 21.4142 12.5858Z" fill="#111827"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4142 12.5858C22.1953 13.3668 22.1953 14.6332 21.4142 15.4142L13.4142 23.4142C12.6332 24.1953 11.3668 24.1953 10.5858 23.4142L2.58579 15.4142C1.80474 14.6332 1.80474 13.3668 2.58579 12.5858C3.36683 11.8047 4.63317 11.8047 5.41421 12.5858L10 17.1716V2C10 0.895431 10.8954 -9.65645e-08 12 0C13.1046 9.65645e-08 14 0.895431 14 2L14 17.1716L18.5858 12.5858C19.3668 11.8047 20.6332 11.8047 21.4142 12.5858Z" fill="#111827"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8453 10.4882C18.4961 11.139 18.4961 12.1943 17.8453 12.8452L11.1786 19.5118C10.5277 20.1627 9.47244 20.1627 8.82157 19.5118L2.1549 12.8452C1.50403 12.1943 1.50403 11.139 2.1549 10.4882C2.80578 9.83728 3.86105 9.83728 4.51193 10.4882L8.33341 14.3096V1.66667C8.33341 0.746193 9.07961 -8.04704e-08 10.0001 0C10.9206 8.04704e-08 11.6667 0.746193 11.6667 1.66667L11.6667 14.3096L15.4882 10.4882C16.1391 9.83728 17.1944 9.83728 17.8453 10.4882Z" fill="#111827"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2763 8.39052C14.797 8.91122 14.797 9.75544 14.2763 10.2761L8.94297 15.6095C8.42227 16.1302 7.57805 16.1302 7.05735 15.6095L1.72402 10.2761C1.20332 9.75544 1.20332 8.91122 1.72402 8.39052C2.24472 7.86982 3.08894 7.86983 3.60964 8.39052L6.66683 11.4477V1.33333C6.66683 0.596954 7.26378 -6.43763e-08 8.00016 0C8.73654 6.43763e-08 9.3335 0.596954 9.3335 1.33333L9.3335 11.4477L12.3907 8.39052C12.9114 7.86983 13.7556 7.86983 14.2763 8.39052Z" fill="#111827"/>
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
