import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { interceptors } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShellModule,
    SharedModule,
    CoursesModule,
  ],
  providers: [AuthGuard, interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
