import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Router} from "@angular/router";
// import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

  // isCollapsed: boolean;
  // loginLogoutText = 'Login';
  // sub: Subscription;

  constructor(
              private router:Router
              // private authservice: AuthService,
              // private growler: GrowlerService,
  ) { }

  // constructor() { }

  ngOnInit() {
    // this.sub = this.authservice.authChanged
    //   .subscribe((loggedIn: boolean) => {
    //       this.setLoginLogoutText();
    //     },
    //     (err: any) => this.logger.log(err));
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  // loginOrOut() {
  //   const isAuthenticated = this.authservice.isAuthenticated;
  //   if (isAuthenticated) {
  //     this.authservice.logout()
  //       .subscribe((status: boolean) => {
  //           this.setLoginLogoutText();
  //           // this.growler.growl('Logged Out', GrowlerMessageType.Info);
  //           this.router.navigate(['/customers']);
  //           return;
  //         },
  //         (err: any) => this.logger.log(err));
  //   }
  //   this.redirectToLogin();
  // }
  //
  // setLoginLogoutText() {
  //   this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
  // }

}

