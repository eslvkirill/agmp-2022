import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderModule } from './header/header.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CoreComponent, BreadcrumbComponent, FooterComponent],
  imports: [CommonModule, HeaderModule],
  exports: [CoreComponent, BreadcrumbComponent, FooterComponent],
})
export class CoreModule {}
