import { Injectable } from '@angular/core';


@Injectable()
export class GlobalDataService {
  userName: string;
  userGroup: string;

  public clearDataService() {
    this.userName = '';
    this.userGroup = '';
  }
}
