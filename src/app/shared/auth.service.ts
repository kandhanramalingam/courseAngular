import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {ClientResponse, ForgotPasswordCredentials, RegisterCredentials, SignInCredentials, SignupSigninResposeData}
  from '../constants/modals';
import {HttpClient} from '@angular/common/http';
import * as URLS from '../constants/urls';

@Injectable({ providedIn: 'root' })
export class AuthService {


  constructor(
    private http: HttpClient
  ) {}

  // tslint:disable-next-line:typedef
  signIn(credentials: SignInCredentials): Observable<ClientResponse<SignupSigninResposeData>> {
    return this.http.post<ClientResponse<SignupSigninResposeData>>(URLS.SIGNIN , credentials);
  }

  // tslint:disable-next-line:typedef
  signOut() {

  }

  // tslint:disable-next-line:typedef
  register(credentials: RegisterCredentials) {

  }

  // tslint:disable-next-line:typedef
  sendPasswordEmail(email) {

  }

  // tslint:disable-next-line:typedef
  resetPassword(credentials: ForgotPasswordCredentials) {

  }

  // tslint:disable-next-line:typedef
  async getUser() {

  }
}
