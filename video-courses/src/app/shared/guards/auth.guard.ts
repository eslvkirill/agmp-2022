import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../shell/header/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthenticated
      ? true
      : this.router.navigate(['login']);
  }

  canActivateChild():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate();
  }
}
