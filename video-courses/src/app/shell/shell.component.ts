import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from './header/services/auth/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.setAuth();
  }

  setAuth(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }
}
