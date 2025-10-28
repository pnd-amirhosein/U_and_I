/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'ensemble-ui/components';

import { defineCustomElement as defineEuiButton } from 'ensemble-ui/components/eui-button.js';
import { defineCustomElement as defineEuiIcon } from 'ensemble-ui/components/eui-icon.js';
import { defineCustomElement as defineEuiInput } from 'ensemble-ui/components/eui-input.js';
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


@ProxyCmp({
  defineCustomElementFn: defineEuiIcon,
  inputs: ['name', 'type']
})
@Component({
  selector: 'eui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'type'],
})
export class EuiIcon {
  protected el: HTMLEuiIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiIcon extends Components.EuiIcon {}


@ProxyCmp({
  defineCustomElementFn: defineEuiInput,
  inputs: ['alert', 'iconStyle', 'mode', 'type', 'validation']
})
@Component({
  selector: 'eui-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alert', 'iconStyle', 'mode', 'type', 'validation'],
})
export class EuiInput {
  protected el: HTMLEuiInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiInput extends Components.EuiInput {}


