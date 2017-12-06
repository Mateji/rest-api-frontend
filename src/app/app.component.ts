import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { GlobalDataService } from './globalData/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService, private globalDataService: GlobalDataService) {}
}
