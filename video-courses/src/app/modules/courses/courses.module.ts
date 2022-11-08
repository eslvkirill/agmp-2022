import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCourseButtonComponent } from './components/add-course-button/add-course-button.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CoursesListComponent,
    AddCourseButtonComponent,
  ],
  imports: [CommonModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
