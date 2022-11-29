import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, AuthComponent, LogoComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
