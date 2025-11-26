/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'ensemble-ui/components';

import { defineCustomElement as defineEuiAutoComplete } from 'ensemble-ui/components/eui-auto-complete.js';
import { defineCustomElement as defineEuiBadge } from 'ensemble-ui/components/eui-badge.js';
import { defineCustomElement as defineEuiButton } from 'ensemble-ui/components/eui-button.js';
import { defineCustomElement as defineEuiCard } from 'ensemble-ui/components/eui-card.js';
import { defineCustomElement as defineEuiCheckbox } from 'ensemble-ui/components/eui-checkbox.js';
import { defineCustomElement as defineEuiChips } from 'ensemble-ui/components/eui-chips.js';
import { defineCustomElement as defineEuiDialogue } from 'ensemble-ui/components/eui-dialogue.js';
import { defineCustomElement as defineEuiDropdown } from 'ensemble-ui/components/eui-dropdown.js';
import { defineCustomElement as defineEuiIcon } from 'ensemble-ui/components/eui-icon.js';
import { defineCustomElement as defineEuiInput } from 'ensemble-ui/components/eui-input.js';
import { defineCustomElement as defineEuiPaginator } from 'ensemble-ui/components/eui-paginator.js';
@ProxyCmp({
  defineCustomElementFn: defineEuiAutoComplete,
  inputs: ['displayField', 'fetchSuggestions', 'placeholder']
})
@Component({
  selector: 'eui-auto-complete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['displayField', 'fetchSuggestions', 'placeholder'],
  outputs: ['itemSelected'],
})
export class EuiAutoComplete {
  protected el: HTMLEuiAutoCompleteElement;
  @Output() itemSelected = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiAutoComplete extends Components.EuiAutoComplete {

  itemSelected: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiBadge,
  inputs: ['color', 'styleValue', 'type']
})
@Component({
  selector: 'eui-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'styleValue', 'type'],
})
export class EuiBadge {
  protected el: HTMLEuiBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiBadge extends Components.EuiBadge {}


@ProxyCmp({
  defineCustomElementFn: defineEuiButton,
  inputs: ['mode', 'size', 'styleValue', 'variant']
})
@Component({
  selector: 'eui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'size', 'styleValue', 'variant'],
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
  defineCustomElementFn: defineEuiCard,
  inputs: ['img', 'mode', 'orientation', 'styleValue']
})
@Component({
  selector: 'eui-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['img', 'mode', 'orientation', 'styleValue'],
})
export class EuiCard {
  protected el: HTMLEuiCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiCard extends Components.EuiCard {}


@ProxyCmp({
  defineCustomElementFn: defineEuiCheckbox,
  inputs: ['mode', 'size', 'states', 'value']
})
@Component({
  selector: 'eui-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'size', 'states', 'value'],
  outputs: ['valueChange'],
})
export class EuiCheckbox {
  protected el: HTMLEuiCheckboxElement;
  @Output() valueChange = new EventEmitter<CustomEvent<'null' | 'false' | 'partial' | 'true'>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiCheckbox extends Components.EuiCheckbox {

  valueChange: EventEmitter<CustomEvent<'null' | 'false' | 'partial' | 'true'>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiChips,
  inputs: ['data', 'displayField', 'placeholder', 'suggestions']
})
@Component({
  selector: 'eui-chips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'displayField', 'placeholder', 'suggestions'],
  outputs: ['itemSelected'],
})
export class EuiChips {
  protected el: HTMLEuiChipsElement;
  @Output() itemSelected = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiChips extends Components.EuiChips {

  itemSelected: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiDialogue,
  inputs: ['headerMessage', 'styleValue', 'variant']
})
@Component({
  selector: 'eui-dialogue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['headerMessage', 'styleValue', 'variant'],
})
export class EuiDialogue {
  protected el: HTMLEuiDialogueElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiDialogue extends Components.EuiDialogue {}


@ProxyCmp({
  defineCustomElementFn: defineEuiDropdown,
  inputs: ['data', 'displayField', 'placeholder', 'suggestions']
})
@Component({
  selector: 'eui-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'displayField', 'placeholder', 'suggestions'],
  outputs: ['itemSelected'],
})
export class EuiDropdown {
  protected el: HTMLEuiDropdownElement;
  @Output() itemSelected = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiDropdown extends Components.EuiDropdown {

  itemSelected: EventEmitter<CustomEvent<any>>;
}


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
  inputs: ['alert', 'max', 'min', 'mode', 'placeholder', 'showClear', 'step', 'styleValue', 'type', 'validation', 'value']
})
@Component({
  selector: 'eui-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alert', 'max', 'min', 'mode', 'placeholder', 'showClear', 'step', 'styleValue', 'type', 'validation', 'value'],
  outputs: ['clear'],
})
export class EuiInput {
  protected el: HTMLEuiInputElement;
  @Output() clear = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiInput extends Components.EuiInput {

  clear: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiPaginator,
  inputs: ['defaultCurrentPage', 'disabled', 'styleValue', 'totalPages']
})
@Component({
  selector: 'eui-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultCurrentPage', 'disabled', 'styleValue', 'totalPages'],
  outputs: ['currentPage'],
})
export class EuiPaginator {
  protected el: HTMLEuiPaginatorElement;
  @Output() currentPage = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiPaginator extends Components.EuiPaginator {

  currentPage: EventEmitter<CustomEvent<any>>;
}


