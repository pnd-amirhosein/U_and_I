import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-underline',
  shadow: false,
})
export class EUIIconUnderline {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.99534 2.99426C6.40956 2.99426 6.74535 3.33007 6.74535 3.7443V11.245C6.74535 14.1449 9.09586 16.4956 11.9952 16.4956C14.8946 16.4956 17.2451 14.1449 17.2451 11.245V3.7443C17.2451 3.33007 17.5809 2.99426 17.9951 2.99426C18.4093 2.99426 18.7451 3.33007 18.7451 3.7443V11.245C18.7451 14.9732 15.7231 17.9956 11.9952 17.9956C8.26729 17.9956 5.24532 14.9732 5.24532 11.245V3.7443C5.24532 3.33007 5.58111 2.99426 5.99534 2.99426ZM2.99536 20.2459C2.99536 19.8317 3.33116 19.4959 3.74538 19.4959H20.2451C20.6593 19.4959 20.9951 19.8317 20.9951 20.2459C20.9951 20.6601 20.6593 20.9959 20.2451 20.9959H3.74538C3.33116 20.9959 2.99536 20.6601 2.99536 20.2459Z" fill="black"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9951 3.74432V11.245C17.9951 14.5591 15.3089 17.2456 11.9953 17.2456C8.68162 17.2456 5.99538 14.5591 5.99538 11.245V3.74432M3.74542 20.2459H20.2451" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C5.16421 2 5.5 2.33579 5.5 2.75V9C5.5 11.4853 7.51472 13.5 10 13.5C12.4853 13.5 14.5 11.4853 14.5 9V2.75C14.5 2.33579 14.8358 2 15.25 2C15.6642 2 16 2.33579 16 2.75V9C16 12.3137 13.3137 15 10 15C6.68629 15 4 12.3137 4 9V2.75C4 2.33579 4.33579 2 4.75 2ZM2 17.25C2 16.8358 2.33579 16.5 2.75 16.5H17.25C17.6642 16.5 18 16.8358 18 17.25C18 17.6642 17.6642 18 17.25 18H2.75C2.33579 18 2 17.6642 2 17.25Z" fill="black"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C5.16421 2 5.5 2.33579 5.5 2.75V7C5.5 8.38071 6.61929 9.5 8 9.5C9.38071 9.5 10.5 8.38071 10.5 7V2.75C10.5 2.33579 10.8358 2 11.25 2C11.6642 2 12 2.33579 12 2.75V7C12 9.20914 10.2091 11 8 11C5.79086 11 4 9.20914 4 7V2.75C4 2.33579 4.33579 2 4.75 2ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H13.25C13.6642 12.5 14 12.8358 14 13.25C14 13.6642 13.6642 14 13.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" fill="black"/>
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
