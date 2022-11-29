import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../services/auth.service';
import { UserData } from '../../types/auth.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  @Output() setAuth: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService) {}

  readonly loginIcon = faUserLarge;
  readonly logoffIcon = faSignOut;

  logout(): void {
    const { firstName, lastName } = this.authService.getUserInfo() as UserData;

    console.log(`Logout: ${firstName} ${lastName}`);

    this.authService.logout();
    this.setAuth.emit();
  }
}
