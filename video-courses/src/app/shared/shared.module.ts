import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorsComponent } from './components/authors/authors.component';
import { ButtonComponent } from './components/button/button.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DurationControlComponent } from './components/duration-control/duration-control.component';
import { ModalWrapperComponent } from './components/modals/modal-wrapper/modal-wrapper.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { BorderColorDirective } from './directives/border-color/border-color.directive';
import { IfAuthenticatedDirective } from './directives/if-authenticated/if-authenticated.directive';
import { MaterialModule } from './material.module';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const COMPONENTS = [
  SearchComponent,
  ButtonComponent,
  DatePickerComponent,
  DurationControlComponent,
  AuthorsComponent,
  PaginationComponent,
  NoDataComponent,
  ModalWrapperComponent,
];
const DIRECTIVES = [BorderColorDirective, IfAuthenticatedDirective];
const PIPES = [DurationPipe, OrderByPipe, FilterPipe];

const exportedDeclarations = [...COMPONENTS, ...DIRECTIVES, ...PIPES];

@NgModule({
  declarations: exportedDeclarations,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [exportedDeclarations, TranslateModule],
})
export class SharedModule {}
