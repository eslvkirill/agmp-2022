import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginInfo, UserInfo } from 'src/app/shell/header/types';

import { USER_ACTIONS } from '.';
import { AuthService } from '../../shell/header/services/auth/auth.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions<{
      type: string;
      token: string;
      userInfo: UserInfo;
      loginInfo: LoginInfo;
    }>,
    private authService: AuthService
  ) {}

  getUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.getUserInfo.type),
      switchMap((action) =>
        this.authService
          .getUserInfo(action.token)
          .pipe(
            map((userInfo) => USER_ACTIONS.getUserInfoSuccess({ userInfo }))
          )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.login.type),
      switchMap((action) =>
        this.authService.login(action.loginInfo).pipe(
          map((response) =>
            USER_ACTIONS.setAuthToken({ token: response.token })
          ),
          catchError((errorMessage: ErrorEvent) =>
            of(USER_ACTIONS.loginError({ errorMessage: errorMessage.error }))
          )
        )
      )
    );
  });

  logoutUser$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(USER_ACTIONS.logoutUser.type),
        tap(() => this.authService.logout())
      );
    },
    { dispatch: false }
  );

  isUserAuthenticated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.isAuthenticated.type),
      map(() =>
        USER_ACTIONS.setAuthenticated({
          isAuthenticated: this.authService.isAuthenticated,
        })
      )
    );
  });

  getAuthToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.getAuthToken.type),
      map(() =>
        USER_ACTIONS.getAuthTokenSuccess({
          token: this.authService.getAuthToken,
        })
      )
    );
  });

  setAuthToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USER_ACTIONS.setAuthToken.type),
      map((action) => {
        this.authService.setAuthToken = action.token;
        return USER_ACTIONS.getAuthToken();
      })
    );
  });
}
