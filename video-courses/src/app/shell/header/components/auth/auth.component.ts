import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  selectUserName,
  selectUserToken,
  USER_ACTIONS,
} from 'src/app/store/user';

import { NavigationService } from '../../../../shared/services/navigation.service';

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

  readonly userName$ = this.store.select(selectUserName);
  readonly token$ = this.store.select(selectUserToken);

  constructor(
    private store: Store,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.initAuthData();
  }

  logout(): void {
    this.setAuth.emit();
    this.store.dispatch(USER_ACTIONS.logoutUser());
    this.navigationService.redirectToLoginPage();
  }

  private initAuthData(): void {
    this.store.dispatch(USER_ACTIONS.getAuthToken());
    this.token$.subscribe((token) => this.initUserName(token));
  }

  private initUserName(token: string | null): void {
    this.store.dispatch(USER_ACTIONS.getUserInfo({ token }));
  }
}
