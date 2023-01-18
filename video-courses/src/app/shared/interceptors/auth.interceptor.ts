import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/shell/header/services/auth.service';

import { HttpErrorStatus } from '../enums';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
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
    const token = this.authService.getAuthToken;

    if (!token) return request;

    return request.clone({
      setHeaders: { Authorization: `Token ${token}` },
    });
  }
}
