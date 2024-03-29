import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

const THEME_DARKNESS_SUFFIX = `-dark`;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit, OnDestroy {

  @Input()
  title = '';

  @HostBinding('class') activeThemeCssClass: string = 'energy';

  isThemeDark = false;
  activeTheme: string = 'energy';
  themes = ['hp', 'stamina', 'mental', 'energy'];
  onWelcomePage: boolean;
  private routeSub = new Subscription();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private overlayContainer: OverlayContainer, private router: Router, private auth: AuthService) {
    this.setTheme('energy', true); // Default Theme
    this.onWelcomePage = true;
    // this.auth.loginStatus().subscribe((isLoggedIn: boolean) => {
    //   this.onWelcomePage = !isLoggedIn;
    // })
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
          if (router.url.includes('welcome') || router.url.length <= 1) {
          this.onWelcomePage = true;
        } else {
          this.onWelcomePage = false;
        }
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe()
    }
  }

  setTheme(theme: string, darkness: boolean = this.isThemeDark): void {
    if (darkness === null)
      darkness = this.isThemeDark;
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return;
    } else
      this.isThemeDark = darkness;

    this.activeTheme = theme;

    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme;

    const classList = this.overlayContainer.getContainerElement().classList;
    if (classList.contains(this.activeThemeCssClass))
      classList.replace(this.activeThemeCssClass, cssClass);
    else
      classList.add(cssClass);

    this.activeThemeCssClass = cssClass;
  }

  toggleDarkness(): void {
    this.setTheme(this.activeTheme, !this.isThemeDark);
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    this.auth.logout();
  }

}
