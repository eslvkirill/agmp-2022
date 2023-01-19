import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { USER_ACTIONS } from 'src/app/store/user';

import { NavigationService } from '../../../../shared/services/navigation.service';

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
    private store: Store,
    private navigationService: NavigationService
  ) {}

  login(): void {
    if (!this.emailValue || !this.passwordValue) return;

    this.store.dispatch(
      USER_ACTIONS.login({
        loginInfo: {
          login: this.emailValue,
          password: this.passwordValue,
        },
      })
    );

    this.navigationService.redirectToCoursesPage();
  }
}
