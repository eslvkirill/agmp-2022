import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { selectAuthenticatedFlag, USER_ACTIONS } from '../store/user';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  @Input() batchName?: string;

  readonly authenticatedFlag$ = this.store.select(selectAuthenticatedFlag);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setAuth();
  }

  setAuth(): void {
    this.store.dispatch(USER_ACTIONS.isAuthenticated());
  }
}
