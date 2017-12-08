import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    apiEndpoint: string;
}

export const appConfig: AppConfig = {
    apiEndpoint: 'https://mateji.betelgeuse.uberspace.de/node/rest-api'
};
