import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-italic',
  shadow: false,
})
export class EUIIconItalic {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4973 3.7443C10.4973 3.33007 10.8331 2.99426 11.2473 2.99426H18.7472C19.1614 2.99426 19.4972 3.33007 19.4972 3.7443C19.4972 4.15854 19.1614 4.49434 18.7472 4.49434H15.4723L10.1152 19.4959H12.7473C13.1615 19.4959 13.4973 19.8317 13.4973 20.2459C13.4973 20.6601 13.1615 20.9959 12.7473 20.9959H5.24745C4.83323 20.9959 4.49744 20.6601 4.49744 20.2459C4.49744 19.8317 4.83323 19.4959 5.24745 19.4959H8.52238L13.8794 4.49434H11.2473C10.8331 4.49434 10.4973 4.15854 10.4973 3.7443Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.24744 20.2459H9.05093M9.05093 20.2459H12.7473M9.05093 20.2459L14.9437 3.74432M14.9437 3.74432H11.2473M14.9437 3.74432H18.7472" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.75C8 2.33579 8.33579 2 8.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H13.0347L8.55196 16.5H11.25C11.6642 16.5 12 16.8358 12 17.25C12 17.6642 11.6642 18 11.25 18H3.75C3.33579 18 3 17.6642 3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H6.96528L11.448 3.5H8.75C8.33579 3.5 8 3.16421 8 2.75Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 2.75C6.25 2.33579 6.58579 2 7 2H13C13.4142 2 13.75 2.33579 13.75 2.75C13.75 3.16421 13.4142 3.5 13 3.5H10.5169L7.08829 12.5H9C9.41421 12.5 9.75 12.8358 9.75 13.25C9.75 13.6642 9.41421 14 9 14H3C2.58579 14 2.25 13.6642 2.25 13.25C2.25 12.8358 2.58579 12.5 3 12.5H5.48314L8.91171 3.5H7C6.58579 3.5 6.25 3.16421 6.25 2.75Z" fill="black"/>
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
