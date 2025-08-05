import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterResponse } from '../../interface/register-response';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isHide: boolean = true;
  isHideConfirmPassword: boolean = true;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

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

  onRegister() {
    console.log(this.registerForm.value);

    this._AuthService.register(this.registerForm.value).subscribe({
      next: (resp: RegisterResponse) => {
        console.log(resp);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  // start::image dropZone
  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  // end::image dropZone
}
