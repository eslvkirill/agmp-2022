import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShellModule } from 'src/app/shell/shell.module';

import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
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
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
