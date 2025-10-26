1. npm install ensemble-ui@latest


2. Update your app.config.ts to this:

// app.config.ts

import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

// 1. Import ONLY defineCustomElements
import { defineCustomElements } from 'ensemble-ui/loader';

// 2. Update the factory function
export function initializeStencil(): () => Promise<void> {
  // We call the function and wrap it in a resolved promise
  // so Angular knows the synchronous work is done.
  return () => Promise.resolve(defineCustomElements(window));
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    // 3. The provider remains the same
    {
      provide: APP_INITIALIZER,
      useFactory: initializeStencil,
      multi: true,
    },
  ],
};


3. Add project's style to the angular project:

"../ensemble-ui/dist/ensemble-ui/ensemble-ui.css"
