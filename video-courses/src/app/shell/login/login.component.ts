import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CoursesService } from '../../courses/services/courses.service';
import { AuthService } from '../header/services/auth.service';

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
    private coursesService: CoursesService
  ) {}

  login(): void {
    if (!this.emailValue || !this.passwordValue) return;

    const data = {
      login: this.emailValue,
      password: this.passwordValue,
    };

    this.authService
      .login(data)
      .subscribe(() => this.coursesService.redirectToCoursesPage());
  }
}
