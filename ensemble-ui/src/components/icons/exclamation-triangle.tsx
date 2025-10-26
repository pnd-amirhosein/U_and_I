import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-exclamation-triangle',
  shadow: false,
})
export class EUIIconExclamationTriangle {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.40136 3.0034C10.5558 1.00229 13.444 1.00229 14.5985 3.0034L21.9528 15.7509C23.1066 17.7509 21.6632 20.2501 19.3542 20.2501H4.64559C2.33661 20.2501 0.893183 17.7509 2.04703 15.7509L9.40136 3.0034ZM12.0001 8.25C12.4143 8.25 12.7501 8.58579 12.7501 9V12.75C12.7501 13.1642 12.4143 13.5 12.0001 13.5C11.5859 13.5 11.2501 13.1642 11.2501 12.75V9C11.2501 8.58579 11.5859 8.25 12.0001 8.25ZM12.0001 16.5C12.4143 16.5 12.7501 16.1642 12.7501 15.75C12.7501 15.3358 12.4143 15 12.0001 15C11.5859 15 11.2501 15.3358 11.2501 15.75C11.2501 16.1642 11.5859 16.5 12.0001 16.5Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9998 9.00006V12.7501M2.69653 16.1257C1.83114 17.6257 2.91371 19.5001 4.64544 19.5001H19.3541C21.0858 19.5001 22.1684 17.6257 21.303 16.1257L13.9487 3.37819C13.0828 1.87736 10.9167 1.87736 10.0509 3.37819L2.69653 16.1257ZM11.9998 15.7501H12.0073V15.7576H11.9998V15.7501Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.4845 2.49499C9.15808 1.32833 10.842 1.32833 11.5156 2.495L17.7943 13.37C18.4678 14.5367 17.6259 15.995 16.2787 15.995H3.72136C2.37421 15.995 1.53224 14.5367 2.20582 13.37L8.4845 2.49499ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V9.25C10.75 9.66421 10.4142 10 10 10C9.58579 10 9.25 9.66421 9.25 9.25L9.25 5.75C9.25 5.33579 9.58579 5 10 5ZM10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70087 2.25C7.27822 1.25 8.72159 1.25 9.29894 2.25L14.4951 11.25C15.0724 12.25 14.3508 13.5 13.1961 13.5H2.80375C1.64905 13.5 0.927363 12.25 1.50471 11.25L6.70087 2.25ZM7.9999 4C8.41412 4 8.7499 4.33579 8.7499 4.75V7.75C8.7499 8.16421 8.41412 8.5 7.9999 8.5C7.58569 8.5 7.2499 8.16421 7.2499 7.75V4.75C7.2499 4.33579 7.58569 4 7.9999 4ZM7.9999 12C8.55219 12 8.9999 11.5523 8.9999 11C8.9999 10.4477 8.55219 10 7.9999 10C7.44762 10 6.9999 10.4477 6.9999 11C6.9999 11.5523 7.44762 12 7.9999 12Z" fill="#0F172A"/>
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
