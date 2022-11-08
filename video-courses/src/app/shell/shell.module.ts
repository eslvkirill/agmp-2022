import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderModule } from './header/header.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ShellComponent, BreadcrumbComponent, FooterComponent],
  imports: [CommonModule, HeaderModule],
  exports: [ShellComponent, BreadcrumbComponent, FooterComponent],
})
export class ShellModule {}
