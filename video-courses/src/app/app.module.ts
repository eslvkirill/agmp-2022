import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { interceptors } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { metaReducers, reducers } from './store';
import { CoursesEffects } from './store/courses';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CoursesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    ShellModule,
    SharedModule,
    CoursesModule,
  ],
  providers: [AuthGuard, interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
