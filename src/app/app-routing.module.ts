import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
