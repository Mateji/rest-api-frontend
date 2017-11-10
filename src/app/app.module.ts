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


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    LoginComponent,
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
