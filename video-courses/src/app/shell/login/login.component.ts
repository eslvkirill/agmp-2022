import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../header/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    this.authService.login();
    this.router.navigate(['courses']);

    console.log('logged in successfully');
  }
}
