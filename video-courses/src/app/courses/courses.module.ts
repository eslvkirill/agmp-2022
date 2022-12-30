import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { ShellModule } from '../shell/shell.module';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    PaginationComponent,
    CoursesComponent,
    CourseItemComponent,
    CoursesListComponent,
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    SharedModule,
    ShellModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
