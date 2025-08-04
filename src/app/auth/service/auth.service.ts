import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../interface/login-user';
import { LoginResponse } from '../interface/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  mainUrl: string = 'https://upskilling-egypt.com:3006';

  constructor(private _HttpClient: HttpClient) {}

  login(user: LoginUser): Observable<LoginResponse> {
    return this._HttpClient.post<LoginResponse>(
      this.mainUrl + '/api/v1/Users/Login',
      user
    );
  }
}
