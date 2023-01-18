import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import { NavigationService } from '../../../../shared/services/navigation.service';
import { AuthService } from '../../services/auth.service';
import { UserInfo } from '../../types/auth.interface';

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

  user: UserInfo;
  firstName: string;
  lastName: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.initUserInfo();
  }

  logout(): void {
    this.authService.logout();
    this.setAuth.emit();
    this.navigationService.redirectToLoginPage();
  }

  private initUserInfo(): void {
    const token = this.authService.getAuthToken;

    this.authService.getUserInfo(token).subscribe((userInfo) => {
      this.user = userInfo;
      this.getUserData();
      this.cdr.markForCheck();
    });
  }

  private getUserData(): void {
    if (!this.user) return;

    const { first, last } = this.user.name;

    this.firstName = first;
    this.lastName = last;
  }
}
