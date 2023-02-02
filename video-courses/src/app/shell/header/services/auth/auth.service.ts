import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL, ENDPOINT } from 'src/app/shared/constants';
import { AuthToken, LoginInfo, UserInfo } from '../../types';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authApiPrefix = `${BACKEND_URL}/${ENDPOINT.AUTH}`;

  constructor(private http: HttpClient) {}

  get getAuthToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  set setAuthToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  get isAuthenticated(): boolean {
    return !!this.getAuthToken;
  }

  login(data: LoginInfo): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.authApiPrefix}/login`, data);
  }

  getUserInfo(token: string | null): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.authApiPrefix}/userinfo`, {
      token,
    });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
