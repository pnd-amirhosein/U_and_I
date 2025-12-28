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
import { defineCustomElement as defineEuiMonthCard } from 'ensemble-ui/components/eui-month-card.js';
import { defineCustomElement as defineEuiPaginator } from 'ensemble-ui/components/eui-paginator.js';
import { defineCustomElement as defineEuiProgressbar } from 'ensemble-ui/components/eui-progressbar.js';
import { defineCustomElement as defineEuiSideNav } from 'ensemble-ui/components/eui-side-nav.js';
import { defineCustomElement as defineEuiSlider } from 'ensemble-ui/components/eui-slider.js';
import { defineCustomElement as defineEuiStat } from 'ensemble-ui/components/eui-stat.js';
import { defineCustomElement as defineEuiStepper } from 'ensemble-ui/components/eui-stepper.js';
@ProxyCmp({
  defineCustomElementFn: defineEuiAutoComplete,
  inputs: ['displayField', 'fetchSuggestions', 'placeholder', 'styleValue']
})
@Component({
  selector: 'eui-auto-complete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['displayField', 'fetchSuggestions', 'placeholder', 'styleValue'],
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
  inputs: ['mode', 'size', 'states', 'styleValue', 'value']
})
@Component({
  selector: 'eui-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'size', 'states', 'styleValue', 'value'],
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
  inputs: ['data', 'displayField', 'placeholder', 'styleValue', 'suggestions']
})
@Component({
  selector: 'eui-chips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'displayField', 'placeholder', 'styleValue', 'suggestions'],
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
  inputs: ['data', 'displayField', 'placeholder', 'styleValue', 'suggestions']
})
@Component({
  selector: 'eui-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'displayField', 'placeholder', 'styleValue', 'suggestions'],
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
  inputs: ['name', 'styleValue', 'type']
})
@Component({
  selector: 'eui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'styleValue', 'type'],
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
  outputs: ['clear', 'change', 'keyUp', 'keyDown', 'keyPress'],
})
export class EuiInput {
  protected el: HTMLEuiInputElement;
  @Output() clear = new EventEmitter<CustomEvent<any>>();
  @Output() change = new EventEmitter<CustomEvent<any>>();
  @Output() keyUp = new EventEmitter<CustomEvent<any>>();
  @Output() keyDown = new EventEmitter<CustomEvent<any>>();
  @Output() keyPress = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiInput extends Components.EuiInput {

  clear: EventEmitter<CustomEvent<any>>;

  change: EventEmitter<CustomEvent<any>>;

  keyUp: EventEmitter<CustomEvent<any>>;

  keyDown: EventEmitter<CustomEvent<any>>;

  keyPress: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiMonthCard,
  inputs: ['density', 'interactive', 'month', 'selectedDate', 'year']
})
@Component({
  selector: 'eui-month-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['density', 'interactive', { name: 'month', required: true }, 'selectedDate', { name: 'year', required: true }],
  outputs: ['dayClick'],
})
export class EuiMonthCard {
  protected el: HTMLEuiMonthCardElement;
  @Output() dayClick = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiMonthCard extends Components.EuiMonthCard {

  dayClick: EventEmitter<CustomEvent<Date>>;
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


@ProxyCmp({
  defineCustomElementFn: defineEuiProgressbar,
  inputs: ['size', 'styleValue', 'value']
})
@Component({
  selector: 'eui-progressbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'styleValue', 'value'],
})
export class EuiProgressbar {
  protected el: HTMLEuiProgressbarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiProgressbar extends Components.EuiProgressbar {}


@ProxyCmp({
  defineCustomElementFn: defineEuiSideNav,
  inputs: ['direction', 'mode', 'size', 'styleValue']
})
@Component({
  selector: 'eui-side-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'mode', 'size', 'styleValue'],
})
export class EuiSideNav {
  protected el: HTMLEuiSideNavElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiSideNav extends Components.EuiSideNav {}


@ProxyCmp({
  defineCustomElementFn: defineEuiSlider,
  inputs: ['size', 'styleValue', 'value']
})
@Component({
  selector: 'eui-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'styleValue', 'value'],
  outputs: ['valueChange'],
})
export class EuiSlider {
  protected el: HTMLEuiSliderElement;
  @Output() valueChange = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiSlider extends Components.EuiSlider {

  valueChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiStat,
  inputs: ['data', 'orientation', 'styleValue']
})
@Component({
  selector: 'eui-stat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'orientation', 'styleValue'],
})
export class EuiStat {
  protected el: HTMLEuiStatElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiStat extends Components.EuiStat {}


@ProxyCmp({
  defineCustomElementFn: defineEuiStepper,
  inputs: ['currentStep', 'orientation', 'steps', 'styleValue']
})
@Component({
  selector: 'eui-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentStep', 'orientation', 'steps', 'styleValue'],
  outputs: ['stepSelect'],
})
export class EuiStepper {
  protected el: HTMLEuiStepperElement;
  @Output() stepSelect = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiStepper extends Components.EuiStepper {

  stepSelect: EventEmitter<CustomEvent<number>>;
}


