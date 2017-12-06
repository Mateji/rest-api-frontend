import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { Group } from './group';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GroupsService {
  private groupsURL = this.config.apiEndpoint + '/groups';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsURL)
      .map((data) => {
        console.log('Service:', data);
        return data;
      })
      .pipe(
      catchError(this.handleError('getGroups', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
