import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

export const JSON_PROFILE_URL: string =
  'https://res.cloudinary.com/dwnegnadm/raw/upload/v1703694114/adrianmilano/azmira.json';
