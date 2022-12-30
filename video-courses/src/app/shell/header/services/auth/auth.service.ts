import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { BACKEND_URL, ENDPOINT } from 'src/app/shared/constants';

import { AuthToken, LoginInfo, UserInfo } from '../../types';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authApiPrefix = `${BACKEND_URL}/${ENDPOINT.AUTH}`;

  constructor(private http: HttpClient, private router: Router) {}

  get getAuthToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  get isAuthenticated(): boolean {
    return !!this.getAuthToken;
  }

  login(data: LoginInfo): Observable<AuthToken> {
    return this.http
      .post<AuthToken>(`${this.authApiPrefix}/login`, data)
      .pipe(tap((response) => localStorage.setItem(TOKEN_KEY, response.token)));
  }

  getUserInfo(token: string | null): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.authApiPrefix}/userinfo`, {
      token,
    });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  redirectToLogin(): void {
    this.router.navigate(['login']);
  }
}
