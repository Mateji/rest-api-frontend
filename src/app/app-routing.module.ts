import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './guards/auth-guard.service';
import { StartComponent } from './start/start.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuard] },
  { path: 'start', component: StartComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
