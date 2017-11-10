import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone();

        console.log('Request:', request);

        return next.handle(request);
    }
}

