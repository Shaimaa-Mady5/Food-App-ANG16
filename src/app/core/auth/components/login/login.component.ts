import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from '../../interface/login-response';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isHide: boolean = true;
  userToken: string = '';

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService: ToastrService
  ) {}
  errorMsg: string = ';';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
      Validators.minLength(6),
    ]),
  });

  onLogin() {
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (resp: LoginResponse) => {
          console.log(resp);
          this.userToken = resp.token;
          localStorage.setItem('userToken', this.userToken);
          this._AuthService.tokenDecode(this.userToken);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.errorMsg = err.error.message;
          this.showError();
        },
        complete: () => {
          this._Router.navigate(['/home']);
        },
      });
    }else{
      this.loginForm.markAllAsTouched()
    }
  }
  showError() {
    this._ToastrService.error(this.errorMsg);
  }
}
