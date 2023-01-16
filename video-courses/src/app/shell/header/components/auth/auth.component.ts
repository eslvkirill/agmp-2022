import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../services/auth.service';
import { UserData } from '../../types/auth.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  @Output() setAuth: EventEmitter<void> = new EventEmitter();

  readonly loginIcon = faUserLarge;
  readonly logoffIcon = faSignOut;

  user: UserData | null;
  firstName: string;
  lastName: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUserInfo();

    if (!this.user) return;

    const { firstName, lastName } = this.user;

    this.firstName = firstName;
    this.lastName = lastName;
  }

  logout(): void {
    console.log(`Logout: ${this.firstName} ${this.lastName}`);

    this.authService.logout();
    this.setAuth.emit();
    this.router.navigate(['login']);
  }
}
