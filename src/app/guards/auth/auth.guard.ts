import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<WelcomeComponent> {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.loginStatus().pipe(
      map(isLoggedIn => isLoggedIn || this.router.createUrlTree(['']))
    );
  }

  canDeactivate(
    component: WelcomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.loginStatus().pipe(
      map(isLoggedIn => !isLoggedIn || this.router.createUrlTree(['home']))
    );
  }

}
