import { APP_INITIALIZER, ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { defineCustomElements } from 'ensemble-ui/loader';

export function initializeStencil(): () => Promise<void> {
  return () => Promise.resolve(defineCustomElements(window));
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: CUSTOM_ELEMENTS_SCHEMA, useValue: [] },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeStencil,
      multi: true, // Required for APP_INITIALIZER
    },
  ]
};
