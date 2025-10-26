import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-arrow-left-heavy',
  shadow: false,
})
export class EUIIconArrowLeftHeavy {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4142 21.4142C10.6332 22.1953 9.36684 22.1953 8.58579 21.4142L0.585787 13.4142C-0.195262 12.6332 -0.195262 11.3668 0.585787 10.5858L8.58579 2.58579C9.36683 1.80474 10.6332 1.80474 11.4142 2.58579C12.1953 3.36683 12.1953 4.63317 11.4142 5.41421L6.82843 10L22 10C23.1046 10 24 10.8954 24 12C24 13.1046 23.1046 14 22 14H6.82843L11.4142 18.5858C12.1953 19.3668 12.1953 20.6332 11.4142 21.4142Z" fill="#111827"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4142 19.4142C10.6332 20.1953 9.36684 20.1953 8.58579 19.4142L0.585787 11.4142C-0.195262 10.6332 -0.195262 9.36683 0.585787 8.58578L8.58579 0.585787C9.36683 -0.195262 10.6332 -0.195262 11.4142 0.585787C12.1953 1.36683 12.1953 2.63317 11.4142 3.41421L6.82843 8L22 8C23.1046 8 24 8.89543 24 10C24 11.1046 23.1046 12 22 12H6.82843L11.4142 16.5858C12.1953 17.3668 12.1953 18.6332 11.4142 19.4142Z" fill="#111827"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.51185 17.8452C8.86097 18.4961 7.8057 18.4961 7.15482 17.8452L0.488156 11.1785C-0.162719 10.5276 -0.162719 9.47237 0.488156 8.82149L7.15482 2.15483C7.8057 1.50395 8.86097 1.50395 9.51184 2.15483C10.1627 2.8057 10.1627 3.86098 9.51184 4.51185L5.69036 8.33334L18.3333 8.33334C19.2538 8.33334 20 9.07953 20 10C20 10.9205 19.2538 11.6667 18.3333 11.6667H5.69036L9.51185 15.4882C10.1627 16.139 10.1627 17.1943 9.51185 17.8452Z" fill="#111827"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.60948 14.2761C7.08878 14.7968 6.24456 14.7968 5.72386 14.2761L0.390525 8.9428C-0.130175 8.4221 -0.130175 7.57788 0.390525 7.05719L5.72386 1.72385C6.24456 1.20315 7.08878 1.20315 7.60948 1.72385C8.13018 2.24455 8.13017 3.08877 7.60948 3.60947L4.55229 6.66666L14.6667 6.66666C15.403 6.66666 16 7.26361 16 7.99999C16 8.73637 15.403 9.33333 14.6667 9.33333H4.55229L7.60948 12.3905C8.13018 12.9112 8.13018 13.7554 7.60948 14.2761Z" fill="#111827"/>
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
