/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'ensemble-ui/components';

import { defineCustomElement as defineEuiAutoComplete } from 'ensemble-ui/components/eui-auto-complete.js';
import { defineCustomElement as defineEuiBadge } from 'ensemble-ui/components/eui-badge.js';
import { defineCustomElement as defineEuiButton } from 'ensemble-ui/components/eui-button.js';
import { defineCustomElement as defineEuiCalendar } from 'ensemble-ui/components/eui-calendar.js';
import { defineCustomElement as defineEuiCalendarHeader } from 'ensemble-ui/components/eui-calendar-header.js';
import { defineCustomElement as defineEuiCalendarNavigator } from 'ensemble-ui/components/eui-calendar-navigator.js';
import { defineCustomElement as defineEuiCard } from 'ensemble-ui/components/eui-card.js';
import { defineCustomElement as defineEuiCheckbox } from 'ensemble-ui/components/eui-checkbox.js';
import { defineCustomElement as defineEuiChips } from 'ensemble-ui/components/eui-chips.js';
import { defineCustomElement as defineEuiDatepicker } from 'ensemble-ui/components/eui-datepicker.js';
import { defineCustomElement as defineEuiDayView } from 'ensemble-ui/components/eui-day-view.js';
import { defineCustomElement as defineEuiDecadeCard } from 'ensemble-ui/components/eui-decade-card.js';
import { defineCustomElement as defineEuiDialogue } from 'ensemble-ui/components/eui-dialogue.js';
import { defineCustomElement as defineEuiDropdown } from 'ensemble-ui/components/eui-dropdown.js';
import { defineCustomElement as defineEuiFeed } from 'ensemble-ui/components/eui-feed.js';
import { defineCustomElement as defineEuiIcon } from 'ensemble-ui/components/eui-icon.js';
import { defineCustomElement as defineEuiInput } from 'ensemble-ui/components/eui-input.js';
import { defineCustomElement as defineEuiMonthCard } from 'ensemble-ui/components/eui-month-card.js';
import { defineCustomElement as defineEuiMonthView } from 'ensemble-ui/components/eui-month-view.js';
import { defineCustomElement as defineEuiPaginator } from 'ensemble-ui/components/eui-paginator.js';
import { defineCustomElement as defineEuiProgressbar } from 'ensemble-ui/components/eui-progressbar.js';
import { defineCustomElement as defineEuiSideNav } from 'ensemble-ui/components/eui-side-nav.js';
import { defineCustomElement as defineEuiSlider } from 'ensemble-ui/components/eui-slider.js';
import { defineCustomElement as defineEuiSnackbar } from 'ensemble-ui/components/eui-snackbar.js';
import { defineCustomElement as defineEuiStat } from 'ensemble-ui/components/eui-stat.js';
import { defineCustomElement as defineEuiStepper } from 'ensemble-ui/components/eui-stepper.js';
import { defineCustomElement as defineEuiTab } from 'ensemble-ui/components/eui-tab.js';
import { defineCustomElement as defineEuiWeekView } from 'ensemble-ui/components/eui-week-view.js';
import { defineCustomElement as defineEuiYear } from 'ensemble-ui/components/eui-year.js';
import { defineCustomElement as defineEuiYearCard } from 'ensemble-ui/components/eui-year-card.js';
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
  defineCustomElementFn: defineEuiCalendar,
  inputs: ['calendarEvents', 'calendarViewMode', 'holidayEventType', 'interactive', 'selectedDate', 'styleValue']
})
@Component({
  selector: 'eui-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['calendarEvents', 'calendarViewMode', 'holidayEventType', 'interactive', 'selectedDate', 'styleValue'],
})
export class EuiCalendar {
  protected el: HTMLEuiCalendarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiCalendar extends Components.EuiCalendar {}


@ProxyCmp({
  defineCustomElementFn: defineEuiCalendarHeader,
  inputs: ['calendarViewMode', 'interactive', 'selectedDate', 'styleValue']
})
@Component({
  selector: 'eui-calendar-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['calendarViewMode', 'interactive', 'selectedDate', 'styleValue'],
  outputs: ['dateChange', 'viewChange'],
})
export class EuiCalendarHeader {
  protected el: HTMLEuiCalendarHeaderElement;
  @Output() dateChange = new EventEmitter<CustomEvent<Date>>();
  @Output() viewChange = new EventEmitter<CustomEvent<IEuiCalendarHeaderCalendarViewEnum>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CalendarViewEnum as IEuiCalendarHeaderCalendarViewEnum } from 'ensemble-ui/components';

export declare interface EuiCalendarHeader extends Components.EuiCalendarHeader {

  dateChange: EventEmitter<CustomEvent<Date>>;

  viewChange: EventEmitter<CustomEvent<IEuiCalendarHeaderCalendarViewEnum>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiCalendarNavigator,
  inputs: ['calendarViewMode', 'interactive', 'selectedDate', 'styleValue']
})
@Component({
  selector: 'eui-calendar-navigator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['calendarViewMode', 'interactive', 'selectedDate', 'styleValue'],
  outputs: ['dateChange'],
})
export class EuiCalendarNavigator {
  protected el: HTMLEuiCalendarNavigatorElement;
  @Output() dateChange = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiCalendarNavigator extends Components.EuiCalendarNavigator {

  dateChange: EventEmitter<CustomEvent<Date>>;
}


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
  defineCustomElementFn: defineEuiDatepicker,
  inputs: ['date', 'defaultValue', 'displayField', 'noClearButton', 'placeholder', 'styleValue', 'suggestions']
})
@Component({
  selector: 'eui-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['date', 'defaultValue', 'displayField', 'noClearButton', 'placeholder', 'styleValue', 'suggestions'],
  outputs: ['dateChanged'],
})
export class EuiDatepicker {
  protected el: HTMLEuiDatepickerElement;
  @Output() dateChanged = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiDatepicker extends Components.EuiDatepicker {

  dateChanged: EventEmitter<CustomEvent<Date>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiDayView,
  inputs: ['calendarEvents', 'day', 'holidayEventType', 'interactive', 'month', 'selectedDate', 'styleValue', 'week', 'year']
})
@Component({
  selector: 'eui-day-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['calendarEvents', { name: 'day', required: true }, 'holidayEventType', 'interactive', { name: 'month', required: true }, { name: 'selectedDate', required: true }, 'styleValue', { name: 'week', required: true }, { name: 'year', required: true }],
  outputs: ['dayClick'],
})
export class EuiDayView {
  protected el: HTMLEuiDayViewElement;
  @Output() dayClick = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiDayView extends Components.EuiDayView {

  dayClick: EventEmitter<CustomEvent<Date>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiDecadeCard,
  inputs: ['holidayEventType', 'interactive', 'selectedDate', 'showHeader', 'startingYear', 'styleValue']
})
@Component({
  selector: 'eui-decade-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['holidayEventType', 'interactive', 'selectedDate', 'showHeader', 'startingYear', 'styleValue'],
  outputs: ['yearClick'],
})
export class EuiDecadeCard {
  protected el: HTMLEuiDecadeCardElement;
  @Output() yearClick = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiDecadeCard extends Components.EuiDecadeCard {

  yearClick: EventEmitter<CustomEvent<Date>>;
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
  inputs: ['data', 'defaultValue', 'displayField', 'noClearButton', 'placeholder', 'styleValue', 'suggestions']
})
@Component({
  selector: 'eui-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'defaultValue', 'displayField', 'noClearButton', 'placeholder', 'styleValue', 'suggestions'],
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
  defineCustomElementFn: defineEuiFeed,
  inputs: ['data', 'mode', 'styleValue']
})
@Component({
  selector: 'eui-feed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'mode', 'styleValue'],
})
export class EuiFeed {
  protected el: HTMLEuiFeedElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiFeed extends Components.EuiFeed {}


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
  inputs: ['alert', 'max', 'min', 'mode', 'noClearButton', 'placeholder', 'showClear', 'step', 'styleValue', 'type', 'validation', 'value']
})
@Component({
  selector: 'eui-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alert', 'max', 'min', 'mode', 'noClearButton', 'placeholder', 'showClear', 'step', 'styleValue', 'type', 'validation', 'value'],
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
  inputs: ['holidayEventType', 'interactive', 'month', 'selectedDate', 'showHeader', 'styleValue', 'year']
})
@Component({
  selector: 'eui-month-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['holidayEventType', 'interactive', { name: 'month', required: true }, 'selectedDate', 'showHeader', 'styleValue', { name: 'year', required: true }],
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
  defineCustomElementFn: defineEuiMonthView,
  inputs: ['calendarEvents', 'holidayEventType', 'interactive', 'month', 'selectedDate', 'styleValue', 'year']
})
@Component({
  selector: 'eui-month-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['calendarEvents', 'holidayEventType', 'interactive', { name: 'month', required: true }, 'selectedDate', 'styleValue', { name: 'year', required: true }],
  outputs: ['dayClick'],
})
export class EuiMonthView {
  protected el: HTMLEuiMonthViewElement;
  @Output() dayClick = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiMonthView extends Components.EuiMonthView {

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
  defineCustomElementFn: defineEuiSnackbar,
  inputs: ['awakeTime', 'dismiss', 'header', 'icon', 'message', 'open', 'styleValue', 'variant']
})
@Component({
  selector: 'eui-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['awakeTime', 'dismiss', 'header', 'icon', 'message', 'open', 'styleValue', 'variant'],
})
export class EuiSnackbar {
  protected el: HTMLEuiSnackbarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiSnackbar extends Components.EuiSnackbar {}


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


@ProxyCmp({
  defineCustomElementFn: defineEuiTab,
  inputs: ['collapse', 'data', 'disabled', 'selectedTab', 'styleValue']
})
@Component({
  selector: 'eui-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'data', 'disabled', 'selectedTab', 'styleValue'],
})
export class EuiTab {
  protected el: HTMLEuiTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiTab extends Components.EuiTab {}


@ProxyCmp({
  defineCustomElementFn: defineEuiWeekView,
  inputs: ['calendarEvents', 'holidayEventType', 'interactive', 'month', 'selectedDate', 'styleValue', 'week', 'year']
})
@Component({
  selector: 'eui-week-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['calendarEvents', 'holidayEventType', 'interactive', { name: 'month', required: true }, 'selectedDate', 'styleValue', { name: 'week', required: true }, { name: 'year', required: true }],
  outputs: ['dayClick'],
})
export class EuiWeekView {
  protected el: HTMLEuiWeekViewElement;
  @Output() dayClick = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiWeekView extends Components.EuiWeekView {

  dayClick: EventEmitter<CustomEvent<Date>>;
}


@ProxyCmp({
  defineCustomElementFn: defineEuiYear,
  inputs: ['holidayEventType', 'styleValue', 'year']
})
@Component({
  selector: 'eui-year',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['holidayEventType', 'styleValue', 'year'],
})
export class EuiYear {
  protected el: HTMLEuiYearElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiYear extends Components.EuiYear {}


@ProxyCmp({
  defineCustomElementFn: defineEuiYearCard,
  inputs: ['holidayEventType', 'interactive', 'selectedDate', 'showHeader', 'styleValue']
})
@Component({
  selector: 'eui-year-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['holidayEventType', 'interactive', 'selectedDate', 'showHeader', 'styleValue'],
  outputs: ['monthClick'],
})
export class EuiYearCard {
  protected el: HTMLEuiYearCardElement;
  @Output() monthClick = new EventEmitter<CustomEvent<Date>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EuiYearCard extends Components.EuiYearCard {

  monthClick: EventEmitter<CustomEvent<Date>>;
}


