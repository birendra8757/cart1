import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  signupForm!: FormGroup;
  integerRegex = /^\d+$/;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private loggerService: LoggerService
  ) {}
  url = 'http://192.168.29.101:5000';

  // msg: string = '';
  // isLoggedin:boolean =false

  signup(data: any) {
    return this.http.post(this.url + '/signup', data).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.loggerService.isLogged = true;
        this.toastr.success('signup seccessfull');
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
  }

  login(data: any) {
    return this.http.post(this.url + '/login', data).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/'])
        this.loggerService.isLogged = true
        this.toastr.success('login seccessfull');
      },
      (err) => {
        this.toastr.error(err.error.msg);
      }
    );
  }

  logout() {
    // return this.http.get(this.url + '/logout').subscribe((res) => {
      localStorage.clear();
        this.loggerService.isLogged = false;

      this.toastr.success('logout seccessfully')
      this.router.navigate(['/login'])
  // } );
  }





  // forgotPassword(email: any) {
  //   return this.http.post(this.url + '/forgetpassword', { email: email });
  // }

  // updatePassword(form: any, emailToken: string) {
  //   return this.http
  //     .put(this.url + '/updatepassword/' + emailToken, form)
  //     .subscribe((res:any) => {
  //       this.toastr.success(res.msg)
  //       this.router.navigate(['/login'])
  //     },
  //       (err) => {
  //       this.toastr.error(err.error.msg);
  //     });
  // }
}


