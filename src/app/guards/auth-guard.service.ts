import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        console.log('AuthGuard:', this.auth.isAuthenticated());
        if (this.auth.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}
