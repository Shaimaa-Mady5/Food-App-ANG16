import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from '../../interface/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isHide: boolean = true;
  userToken: string = '';

  constructor(private _AuthService: AuthService, private _Router:Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    this._AuthService.login(this.loginForm.value).subscribe({
      next: (resp: LoginResponse) => {
        console.log(resp);
        this.userToken = resp.token;
        localStorage.setItem('userToken', this.userToken);
        this._AuthService.tokenDecode(this.userToken);
        this._Router.navigate(['/home'])
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
