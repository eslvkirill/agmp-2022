import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { BorderColorDirective } from './directives/border-color/border-color.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

const COMPONENTS = [
  SearchComponent,
  ButtonComponent,
  PaginationComponent,
  NoDataComponent,
];
const DIRECTIVES = [BorderColorDirective];
const PIPES = [DurationPipe, OrderByPipe, FilterPipe];

const exportedDeclarations = [...COMPONENTS, ...DIRECTIVES, ...PIPES];

@NgModule({
  declarations: exportedDeclarations,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: exportedDeclarations,
})
export class SharedModule {}
