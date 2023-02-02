import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthenticatedFlag, USER_ACTIONS } from 'src/app/store/user';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  private readonly authenticatedFlag$ = this.store.select(
    selectAuthenticatedFlag
  );

  private isAuthenticated: boolean;

  constructor(
    private store: Store,
    private navigationService: NavigationService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.dispatch(USER_ACTIONS.isAuthenticated());
    this.authenticatedFlag$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    );

    return this.isAuthenticated
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
