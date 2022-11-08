import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthComponent } from './components/auth/auth.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, AuthComponent, LogoComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
