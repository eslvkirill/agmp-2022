import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';

import { NavigationService } from '../../../../shared/services/navigation.service';
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

  userName$: Observable<string>;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.initUserName();
  }

  logout(): void {
    this.authService.logout();
    this.setAuth.emit();
    this.navigationService.redirectToLoginPage();
  }

  private initUserName(): void {
    this.userName$ = this.authService
      .getUserInfo(this.authService.getAuthToken)
      .pipe(
        map((userInfo) => {
          const { first, last } = userInfo.name;
          return `${first} ${last}`;
        })
      );
  }
}
