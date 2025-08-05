import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from '../../interface/login-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   isHide: boolean = true;
    userToken: string = '';
  
    constructor(private _AuthService: AuthService, private _Router:Router) {}
  
    loginForm: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  
    onRegister() {
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
