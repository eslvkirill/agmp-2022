import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShellModule } from 'src/app/shell/shell.module';
import { MaterialModule } from '../../shared/material.module';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ShellModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
