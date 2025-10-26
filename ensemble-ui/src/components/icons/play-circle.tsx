import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-play-circle',
  shadow: false,
})
export class EUIIconPlayCircle {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM10.6709 7.90332C9.92135 7.48747 9.00046 8.02953 9 8.88672V15.1123C9.00002 15.97 9.92112 16.5119 10.6709 16.0957L16.2744 12.9834C17.0456 12.5547 17.0455 11.4453 16.2744 11.0166L10.6709 7.90332Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9099 11.6722C16.1671 11.8151 16.1671 12.1849 15.9099 12.3278L10.3071 15.4405C10.0572 15.5794 9.75 15.3986 9.75 15.1127V8.88732C9.75 8.60139 10.0572 8.42065 10.3071 8.55951L15.9099 11.6722Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM8.39061 7.09172C8.63141 6.96025 8.92479 6.97076 9.15557 7.11912L12.6556 9.36912C12.8702 9.50712 13 9.7448 13 10C13 10.2552 12.8702 10.4929 12.6556 10.6309L9.15557 12.8809C8.92479 13.0292 8.63141 13.0398 8.39061 12.9083C8.1498 12.7768 8 12.5244 8 12.25V7.75C8 7.47565 8.1498 7.22318 8.39061 7.09172Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.15266 5.23351C6.65336 4.91578 6 5.27444 6 5.86625V10.1337C6 10.7256 6.65336 11.0842 7.15266 10.7665L10.5057 8.63275C10.9688 8.33803 10.9688 7.66197 10.5057 7.36725L7.15266 5.23351Z" fill="#0F172A"/>
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
