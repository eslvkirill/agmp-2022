import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [
    ShellComponent,
    BreadcrumbComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MaterialModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    ShellComponent,
    BreadcrumbComponent,
    FooterComponent,
    LoginComponent,
  ],
})
export class ShellModule {}
