import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'eui-icon-backward',
  shadow: false,
})
export class EUIIconBackward {
  @Element() hostEl!: HTMLElement;
  @Prop() type : "solid" | "outline" | "mini" | "micro" = "solid";

  getSvg() {
    switch (this.type) {
      case 'solid': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.19481 18.4394C10.4448 19.1536 12.0001 18.2511 12.0001 16.8114V14.4709L18.9448 18.4394C20.1948 19.1536 21.7501 18.2511 21.7501 16.8114L21.7501 8.68856C21.7501 7.24889 20.1948 6.34633 18.9448 7.06061L12.0001 11.029V8.68856C12.0001 7.24889 10.4448 6.34633 9.19481 7.06061L2.08732 11.122C0.827666 11.8418 0.827664 13.6581 2.08732 14.3779L9.19481 18.4394Z" fill="#0F172A"/>
</svg>
`;
      case 'outline': return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0001 16.8114C21.0001 17.6752 20.0669 18.2167 19.3169 17.7882L12.2094 13.7267C11.4536 13.2949 11.4536 12.2051 12.2094 11.7732L19.3169 7.71178C20.0669 7.28321 21.0001 7.82475 21.0001 8.68855V16.8114Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2501 16.8114C11.2501 17.6752 10.3169 18.2167 9.56691 17.7882L2.45942 13.7267C1.70363 13.2949 1.70363 12.2051 2.45942 11.7732L9.56691 7.71178C10.3169 7.28321 11.2501 7.82475 11.2501 8.68855L11.2501 16.8114Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
      case 'mini': return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.71178 4.81859C8.71111 4.20135 10 4.9202 10 6.09478V9.06757C10.1044 8.93643 10.234 8.81954 10.389 8.72382L16.7118 4.81859C17.7111 4.20135 19 4.9202 19 6.09478V13.9053C19 15.0798 17.7111 15.7987 16.7118 15.1815L10.389 11.2762C10.234 11.1805 10.1044 11.0636 10 10.9325V13.9053C10 15.0798 8.71111 15.7987 7.71178 15.1815L1.38901 11.2762C0.439994 10.6901 0.439991 9.30998 1.38901 8.72382L7.71178 4.81859Z" fill="#0F172A"/>
</svg>
`;
      case 'micro': return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 4.75C8.5 4.48569 8.36087 4.24089 8.13379 4.10564C7.90671 3.97038 7.62519 3.96464 7.39279 4.09053L1.39279 7.34053C1.15077 7.47163 1 7.72476 1 8C1 8.27524 1.15077 8.52837 1.39279 8.65947L7.39279 11.9095C7.62519 12.0354 7.90671 12.0296 8.13379 11.8944C8.36087 11.7591 8.5 11.5143 8.5 11.25V8.98838L13.8928 11.9095C14.1252 12.0354 14.4067 12.0296 14.6338 11.8944C14.8609 11.7591 15 11.5143 15 11.25V4.75C15 4.48569 14.8609 4.24089 14.6338 4.10564C14.4067 3.97038 14.1252 3.96464 13.8928 4.09053L8.5 7.01162V4.75Z" fill="#0F172A"/>
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
