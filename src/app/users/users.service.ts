import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  private userUrl = this.config.apiEndpoint + '/users';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .map((data) => {
        console.log("Service:", data);
        return data;
      })
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
