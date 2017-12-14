import { GlobalDataService } from '../globalData/global-data.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable()
export class GroupGuard implements CanActivate {
    constructor(private globalDataService: GlobalDataService) { }

    canActivate() {
        return true;
    }
}
