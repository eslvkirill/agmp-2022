import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../shell/header/services/auth.service';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthenticated
      ? true
      : this.navigationService.redirectToLoginPage();
  }

  canActivateChild():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate();
  }
}
