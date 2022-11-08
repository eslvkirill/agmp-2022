import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoursesComponent, CourseComponent, CoursesListComponent],
  imports: [CommonModule, SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
