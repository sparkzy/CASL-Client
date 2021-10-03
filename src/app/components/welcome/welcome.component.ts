import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/beans/user';
import { HttpService } from 'src/app/services/http-service/http.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordVerify = new FormControl('', [Validators.required, Validators.minLength(8)]);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.http.getByEmail(this.email.value, 'user/email/').subscribe(
      (succ) => {
        console.log(succ);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(['home']);
  }

  signUp(): void {
    const newUser = new User(this.email.value, this.name.value, this.password.value);
    console.log(newUser);
    this.http.save(newUser, 'user').subscribe(
      (succ) => {
        console.log(succ);
      }
      ,
      (err) => {
        console.log(err);
      }
    );
    console.log(`E-mail: ${this.email.value}\n Password: ${this.password.value}\n Display name:: ${this.name.value}\n Password verify: ${this.passwordVerify.value}`);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minlength') ? 'Password is not long enough, min 8 character' : '';
  }

  getPasswordVerifyErrorMessage() {
    if (this.passwordVerify.hasError('required')) {
      return 'You must enter a value';
    }

    return this.passwordVerify.hasError('minlength') ? 'Password is not long enough, min 8 character' : '';
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('minlength') ? 'Display name is not long enough, min 3 characters' : '';
  }

}
