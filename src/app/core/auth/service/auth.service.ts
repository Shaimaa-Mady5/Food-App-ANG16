import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../interface/login-user';
import { LoginResponse } from '../interface/login-response';
import { jwtDecode } from 'jwt-decode';
import { RegisterResponse } from '../interface/register-response';
import { RegisterUser } from '../interface/register-user';
import { ResetDetails } from '../interface/reset-details';
import { VerifyAccount } from '../interface/verify-account';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  mainUrl: string = 'https://upskilling-egypt.com:3006/api/v1/';

  constructor(private _HttpClient: HttpClient) {}

  // start::JWT
  tokenDecode(encodeToken: string) {
    let decodeToken = jwtDecode(encodeToken);
    // console.log(decodeToken);
  }
  // end:: JWT

  // start::register
  register(user: RegisterUser): Observable<RegisterResponse> {
    return this._HttpClient.post<RegisterResponse>(
      this.mainUrl + 'users/register',
      user
    );
  }
  // end::register

  // start::verify account
  verifyAccount(userDetails: VerifyAccount): Observable<RegisterResponse> {
    return this._HttpClient.put<RegisterResponse>(
      this.mainUrl + 'Users/verify',
      userDetails
    );
  }
  // end::verify account

  // start::login
  login(user: LoginUser): Observable<LoginResponse> {
    return this._HttpClient.post<LoginResponse>(
      this.mainUrl + 'Users/Login',
      user
    );
  }
  // end::login

  // start::forgetPassword
  forgetPassword(userEmail: string): Observable<RegisterResponse> {
    return this._HttpClient.post<RegisterResponse>(
      this.mainUrl + 'Users/Reset/Request',
      userEmail
    );
  }
  // end::forgetPassword

  // start::resetPassword
  resetPassword(userDetails: ResetDetails): Observable<RegisterResponse> {
    return this._HttpClient.post<RegisterResponse>(
      this.mainUrl + 'Users/Reset',
      userDetails
    );
  }
  // end::resetPassword
}
