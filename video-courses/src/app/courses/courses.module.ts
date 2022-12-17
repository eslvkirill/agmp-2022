import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CoursesListComponent,
    AddCourseComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, FontAwesomeModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
