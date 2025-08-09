import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterResponse } from '../../interface/register-response';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  isHide: boolean = true;
  isHideConfirmPassword: boolean = true;
  errorMsg: string = ';';
  successMsg: string = ';';
  
    constructor(
      private _AuthService: AuthService,
      private _Router: Router,
      private _ToastrService: ToastrService
    ) {}
    resetForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      seed: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6),
      ]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),
    });
  
    onReset() {
      if (this.resetForm.valid) {
        this._AuthService.resetPassword(this.resetForm.value).subscribe({
          next: (resp: RegisterResponse) => {
            console.log(resp);
            this.successMsg=resp.message;
            this.showSuccess();
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
            this.errorMsg = err.error.message;
            this.showError();
          },
          complete: () => {
            this._Router.navigate(['/login']);
          },
        });
      }else{
        this.resetForm.markAllAsTouched()
      }
    }
    showError() {
      this._ToastrService.error(this.errorMsg);
    }
    showSuccess() {
      this._ToastrService.success(this.successMsg);
    }

}
