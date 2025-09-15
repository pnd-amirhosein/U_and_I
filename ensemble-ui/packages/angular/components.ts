/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'ensemble-ui/components';

import { defineCustomElement as defineEnsembleButton } from 'ensemble-ui/components/ensemble-button.js';
@ProxyCmp({
  defineCustomElementFn: defineEnsembleButton,
  inputs: ['label', 'variant']
})
@Component({
  selector: 'ensemble-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'variant'],
})
export class EnsembleButton {
  protected el: HTMLEnsembleButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EnsembleButton extends Components.EnsembleButton {}


