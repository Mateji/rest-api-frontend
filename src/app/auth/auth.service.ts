import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'
import { AppConfig, APP_CONFIG } from '../app.config';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private authUrl = this.config.apiEndpoint + '/authenticate';
  loggedIn: boolean;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();

    return tokenNotExpired(null, token);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}))
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          localStorage.setItem('token', token);
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
