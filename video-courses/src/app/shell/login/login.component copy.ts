import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    if (!this.emailValue || !this.passwordValue) return;

    const data = {
      login: this.emailValue,
      password: this.passwordValue,
    };

    this.authService
      .login(data)
      .subscribe(() => this.router.navigate(['courses']));
  }
}
