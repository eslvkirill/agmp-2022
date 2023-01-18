import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavigationService } from '../../shared/services/navigation.service';
import { AuthService } from '../header/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  emailValue: string;
  passwordValue: string;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  login(): void {
    if (!this.emailValue || !this.passwordValue) return;

    const data = {
      login: this.emailValue,
      password: this.passwordValue,
    };

    this.authService
      .login(data)
      .subscribe(() => this.navigationService.redirectToCoursesPage());
  }
}
