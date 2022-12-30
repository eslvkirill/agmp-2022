import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

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

  userName: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initUserName();
  }

  logout(): void {
    this.authService.logout();
    this.setAuth.emit();
    this.authService.redirectToLogin();
  }

  private initUserName(): void {
    const token = this.authService.getAuthToken;

    this.authService
      .getUserInfo(token)
      .pipe(
        map((userInfo) => {
          const { first, last } = userInfo.name;
          return `${first} ${last}`;
        })
      )
      .subscribe((userName) => {
        this.userName = userName;
        this.cdr.markForCheck();
      });
  }
}
