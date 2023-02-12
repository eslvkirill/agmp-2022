import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectComponent } from './components/language-select/language-select.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    LogoComponent,
    LanguageSelectComponent
  ],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
