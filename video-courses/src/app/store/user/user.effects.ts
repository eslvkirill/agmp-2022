import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { USER_ACTIONS } from '.';
import { AuthService } from '../../shell/header/services/auth/auth.service';
import { LoginInfo, UserInfo } from 'src/app/shell/header/types';

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
        this.authService
          .login(action.loginInfo)
          .pipe(
            map((response) =>
              USER_ACTIONS.setAuthToken({ token: response.token })
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
