import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoginErrorMessage, USER_ACTIONS } from 'src/app/store/user';
import { NavigationService } from '../../../../shared/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly user = {
    email: '',
    password: '',
  };

  readonly errorMessage$ = this.store.select(selectLoginErrorMessage);

  constructor(
    private store: Store,
    private navigationService: NavigationService
  ) {}

  login(): void {
    this.store.dispatch(
      USER_ACTIONS.login({
        loginInfo: {
          login: this.user.email,
          password: this.user.password,
        },
      })
    );

    this.navigationService.redirectToCoursesPage();
  }
}
