import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup, AbstractControl, } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // loginForm!: FormGroup;
  constructor(private userService:UserService ,private router:Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit() {
   this.userService.login(this.form.value)
  }


  login() {
    this.userService.login(this.form.value)
    // this.router.navigate(['/cart'])
}

//   logout() {
//   this.userService.logout
// }

  
}




