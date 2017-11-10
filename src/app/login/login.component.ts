import { AuthService } from '../auth/auth.service';
import { LoginUser } from './loginUser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  model = new LoginUser();
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.auth.login(this.model.name, this.model.password)
      .subscribe(result => {
        console.log(result);
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

}
