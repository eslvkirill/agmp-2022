import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faUserLarge, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  readonly loginIcon = faUserLarge;
  readonly logoffIcon = faSignOut;
}
