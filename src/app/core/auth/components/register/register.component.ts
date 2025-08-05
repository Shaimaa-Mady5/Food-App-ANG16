import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterResponse } from '../../interface/register-response';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isHide: boolean = true;
  isHideConfirmPassword: boolean = true;
  successMsg: string = '';

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService: ToastrService
  ) {}

  // start::create register formGroup
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  // end::create register formGroup
  // handle register submit button
  onRegister() {
    console.log(this.registerForm.value);

    this._AuthService.register(this.registerForm.value).subscribe({
      next: (resp: RegisterResponse) => {
        console.log(resp);
        this.successMsg = resp.message;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
      complete: () => {
        this.showSuccess();
      },
    });
  }

  // start::image dropZone
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  // end::image dropZone

  showSuccess() {
    this._ToastrService.success(this.successMsg);
  }
}
