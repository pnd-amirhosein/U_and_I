import { Routes } from '@angular/router';
import { ButtonComponent } from './button.component';
import { InputComponent } from './input.component.ts';
import { IconComponent } from './icon.component';
import { AutoCompleteComponent } from './autocomplete.component';
import { BadgeComponent } from './badge.component';

export const routes: Routes = [
    { path: "button", component: ButtonComponent },
    { path: "input", component: InputComponent },
    { path: "icon", component: IconComponent },
    { path: "autocomplete", component: AutoCompleteComponent },
    { path: "badge", component: BadgeComponent },
];
