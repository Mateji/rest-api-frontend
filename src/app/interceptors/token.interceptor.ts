import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.injector.get(AuthService);
        if (auth.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${auth.getToken()}`
                }
            });
        }

        return next.handle(request);
    }
}
