/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'ensemble-ui/components';

import { defineCustomElement as defineEuiButton } from 'ensemble-ui/components/eui-button.js';
@ProxyCmp({
  defineCustomElementFn: defineEuiButton,
  inputs: ['mode', 'size', 'variant']
})
@Component({
  selector: 'eui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'size', 'variant'],
})
export class EuiButton {
  protected el: HTMLEuiButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiButton extends Components.EuiButton {}


