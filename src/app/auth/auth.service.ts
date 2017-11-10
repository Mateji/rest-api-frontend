import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AppConfig, APP_CONFIG } from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private authUrl = this.config.apiEndpoint + '/authenticate';
  loggedIn: boolean;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();

    return tokenNotExpired(null, token);
  }

  login(name: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, { name: name, password: password })
      .map((data) => {
        if (data['success']) {
          console.log(data);
          const token = data['token'];
          if (token) {
            localStorage.setItem('token', token);
            return true;
          }
        }
        return false;
      });
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
