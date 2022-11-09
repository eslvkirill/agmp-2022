import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';

const COMPONENTS = [SearchComponent, ButtonComponent, PaginationComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: COMPONENTS,
})
export class SharedModule {}
