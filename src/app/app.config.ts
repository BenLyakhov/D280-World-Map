import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//NO: import { HttpClient } from '@angular/common/http'; //NO
// the following import fixes R3InjectorError NullInjector: No provider for _HttpClient!
import { HttpClientModule } from '@angular/common/http';

//Use the HttpClientModule for API stuff, not HttpClient!!!!!!

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
  
};
