import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-user-circle',
  shadow: false,
})
export class EUIIconUserCircle {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6854 19.0971C20.5721 17.3191 21.75 14.7971 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 14.7971 3.42785 17.3191 5.31463 19.0971C7.06012 20.7419 9.41234 21.75 12 21.75C14.5877 21.75 16.9399 20.7419 18.6854 19.0971ZM6.14512 17.8123C7.51961 16.0978 9.63161 15 12 15C14.3684 15 16.4804 16.0978 17.8549 17.8123C16.3603 19.3178 14.289 20.25 12 20.25C9.711 20.25 7.63973 19.3178 6.14512 17.8123ZM15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 12C8.0417 12.0001 6.30209 12.9382 5.20703 14.3896C6.39529 15.6864 8.10256 16.4999 10 16.5C11.8971 16.4999 13.6038 15.686 14.792 14.3896C13.6969 12.9385 11.958 12.0001 10 12ZM10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM7.99913 9C6.17453 9 4.5782 9.97733 3.70508 11.437C4.71303 12.6947 6.26204 13.5 7.99913 13.5C9.73623 13.5 11.2852 12.6947 12.2932 11.437C11.4201 9.97733 9.82373 9 7.99913 9Z" fill="#0F172A"/>
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
