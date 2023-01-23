import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

const COMPONENTS = [
  SearchComponent,
  ButtonComponent,
  DatePickerComponent,
  DurationControlComponent,
  PaginationComponent,
  NoDataComponent,
  ModalWrapperComponent,
];
const DIRECTIVES = [BorderColorDirective, IfAuthenticatedDirective];
const PIPES = [DurationPipe, OrderByPipe, FilterPipe];

const exportedDeclarations = [...COMPONENTS, ...DIRECTIVES, ...PIPES];

@NgModule({
  declarations: exportedDeclarations,
  imports: [CommonModule, FontAwesomeModule, FormsModule, MaterialModule],
  exports: [exportedDeclarations],
})
export class SharedModule {}
