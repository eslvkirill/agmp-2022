import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { AuthService } from '../header/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() setAuth: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login();
    this.setAuth.emit();

    console.log('logged in successfully');
  }
}
