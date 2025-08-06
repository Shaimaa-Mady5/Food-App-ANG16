import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyComponent } from './components/verify/verify.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    AuthComponent,
    FormTitleComponent,
    VerifyComponent
  ],
  imports: [CommonModule, AuthRoutingModule,SharedModule],
})
export class AuthModule {}
