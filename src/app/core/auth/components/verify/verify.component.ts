import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from '../../interface/login-response';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterResponse } from '../../interface/register-response';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent {
  errorMsg: string = ';';
  successMsg: string = ';';

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService: ToastrService
  ) {}
  verifyForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6),
    ]),
  });

  onVerify() {
    if (this.verifyForm.valid) {
      this._AuthService.verifyAccount(this.verifyForm.value).subscribe({
        next: (resp: RegisterResponse) => {
          console.log(resp);
          this.successMsg = resp.message;
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
    } else {
      this.verifyForm.markAllAsTouched();
    }
  }
  showError() {
    this._ToastrService.error(this.errorMsg);
  }
  showSuccess() {
    this._ToastrService.success(this.successMsg);
  }
}
