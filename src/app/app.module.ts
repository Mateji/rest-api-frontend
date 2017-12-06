import { AppConfig } from './app.config';
import { ApiUrlInterceptor } from './interceptors/apiUrl.interceptor';
import { environment } from './../environments/environment.prod';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { APP_CONFIG, appConfig } from './app.config';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { StartComponent } from './start/start.component';
import { AuthGuard } from './guards/auth-guard.service';
import { LandingComponent } from './landing/landing.component';
import { GroupsService } from './groups/groups.service';
import { SignupComponent } from './signup/signup.component';
import { GlobalDataService } from './globalData/global-data.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    LoginComponent,
    StartComponent,
    LandingComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService,
    AuthService,
    GroupsService,
    AuthGuard,
    GlobalDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_CONFIG,
      useValue: appConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
      deps: [APP_CONFIG]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
