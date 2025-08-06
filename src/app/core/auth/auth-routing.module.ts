import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'login' },
      { path: 'register', component: RegisterComponent, title: 'register' },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
        title: 'forget-password',
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'reset-password',
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'change-password',
      },
      { path: 'verify', component: VerifyComponent, title: 'verify-account' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
