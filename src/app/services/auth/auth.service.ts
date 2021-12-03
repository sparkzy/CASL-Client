import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from 'src/app/beans/user';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(private http: HttpService, private router: Router) { }

  login(user: User) {
    this.http.login(user).subscribe(
      (succ: User) => {
        this.router.navigate(['home']);
        localStorage.setItem('currentUser', JSON.stringify(succ));
      },
      (err) => {
        // console.log(err);
      }
    );
  }

  signup(user: User) {
    this.http.save(user, 'user/signup').subscribe(
      (succ: User) => {
        // console.log(succ);
      }
      ,
      (err) => {
        // console.log(err);
      }
    );
  }

  loginStatus(): Observable<boolean> {
    return of(this.isLoggedIn).pipe(
      // delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
    this.router.navigate(['welcome']);
  }
}
