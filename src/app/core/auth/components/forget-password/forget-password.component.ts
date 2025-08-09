import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterResponse } from '../../interface/register-response';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  errorMsg: string = ';';
  successMsg:string='';

  
    constructor(
      private _AuthService: AuthService,
      private _Router: Router,
      private _ToastrService: ToastrService
    ) {}

    // start::forget formGroup 
    forgetPasswordForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
      // end::forget formGroup 

    onForgetPassword() {
      if (this.forgetPasswordForm.valid) {
        this._AuthService.forgetPassword(this.forgetPasswordForm.value).subscribe({
          next: (resp:RegisterResponse) => {
            console.log(resp);
            this.successMsg=resp.message;
          
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
            this.errorMsg = err.error.message;
            this.showError();
          },
          complete: () => {
            this._Router.navigate(['/reset-password']);
          },
        });
      }else{
        this.forgetPasswordForm.markAllAsTouched()
      }
    }
    showError() {
      this._ToastrService.error(this.errorMsg);
    };
     showSuccess() {
    this._ToastrService.success(this.successMsg);
    this._Router.navigate(['/verify'])
  };

}
