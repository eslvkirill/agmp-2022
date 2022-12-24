import { Injectable } from '@angular/core';

import { USER_INFO } from '../constants/user-info.constants';
import { UserData } from '../types/auth.interface';

const KEY_NAME = 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isAuthenticated(): boolean {
    return !!localStorage.getItem(KEY_NAME);
  }

  login(): void {
    localStorage.setItem(KEY_NAME, JSON.stringify(USER_INFO));
  }

  logout(): void {
    localStorage.removeItem(KEY_NAME);
  }

  getUserInfo(): UserData | null {
    return this.isAuthenticated
      ? JSON.parse(localStorage.getItem(KEY_NAME) as string)
      : null;
  }
}
