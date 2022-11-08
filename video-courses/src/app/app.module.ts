import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    SharedModule,
    ModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
