import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Subscription, tap, throwError } from 'rxjs';
import { __values } from 'tslib';
import { User } from '../model/user.model';




export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  private tokenExpirationTimer: any;
  user = new BehaviorSubject<User>(null);



  constructor(private http: HttpClient, private router: Router, public afAuth: AngularFireAuth) {
    //this.userData = afAuth.authState;
  }



  signup(firstName, lastName, date, email, password) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8080/registration',
        {
          firstName: firstName,
          lastName: lastName,
          birthDate: date,
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      ).subscribe();
  }


  login(username, password) {
    return this.http
      .post<any>(
        'http://localhost:8080/login',
        {
          username: username,
          password: password,
        }
      ).pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      ).subscribe();

      //.subscribe(
      //  resData => {
       //   console.log(resData.access_token);
          //this.isLoading = false;
       //   this.token = resData.access_token;
       // } ,
    //    errorMessage => {
      //    console.log(errorMessage);
          //this.error = errorMessage;
          //this.isLoading = false;
     //   }
     // );

  }


  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  logout() {
    this.user.next(null);
    //this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['']);
  }


}
