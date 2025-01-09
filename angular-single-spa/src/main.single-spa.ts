import { enableProdMode, NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';



import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

import { environment } from '../environments/environment';
import { AppModule } from './app/app.module';

import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { EmptyRouteComponent } from './app/empty-route/empty-route.component';

 if (environment.production) {
   enableProdMode();
 }

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        getSingleSpaExtraProviders(),
        provideRouter([{ path: '**', component: EmptyRouteComponent }]),
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    });
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

 export const bootstrap = lifecycles.bootstrap;
 export const mount = lifecycles.mount;
 export const unmount = lifecycles.unmount;

