import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, Observable, throwError } from 'rxjs';
import { selectUserToken, USER_ACTIONS } from 'src/app/store/user';
import { HttpErrorStatus } from '../enums';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly token$ = this.store.select(selectUserToken);

  private token: string | null;

  constructor(
    private store: Store,
    private navigationService: NavigationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.setAuthToken(request);

    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error.status === HttpErrorStatus.Unauthorized) {
          this.navigationService.redirectToLoginPage();
        }
        return throwError(error);
      })
    );
  }

  private setAuthToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    this.store.dispatch(USER_ACTIONS.getAuthToken());
    this.token$.subscribe((token) => (this.token = token));

    if (!this.token) return request;

    return request.clone({
      setHeaders: { Authorization: `Token ${this.token}` },
    });
  }
}
