import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    userName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    country: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  });
  // end::create register formGroup
  // handle register submit button
  onRegister() {
    console.log(this.registerForm.value);

   if (this.registerForm.valid) {
     this._AuthService.register(this.registerForm.value).subscribe({
      next: (resp: RegisterResponse) => {
        console.log(resp);
        this.successMsg = resp.message;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.showError()
      },
      complete: () => {
        this.showSuccess();
        this._Router.navigate(['/verify'])
      },
    });
   }
   else{
    this.registerForm.markAllAsTouched()
   }
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
    this._Router.navigate(['/verify'])
  };
  showError(){
    this._ToastrService.error('hello error')
  }
}
