import { AppConfig, APP_CONFIG } from './../app.config';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';


@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
    constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({url: this.prepareUrl(req.url)});
        return next.handle(req);
    }

    private isAbsoluteUrl(url: string): boolean {
        const absolutePattern = /^https?:\/\//i;
        return absolutePattern.test(url);
    }

    private prepareUrl(url: string): string {
        url = this.isAbsoluteUrl(url) ? url : this.config.apiEndpoint + '/' + url;
        return url.replace(/([^:]\/)\/+/g, '$1');
    }
}