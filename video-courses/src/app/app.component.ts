import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses/services/courses.service';
import { CourseInfo } from './courses/types/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  courses: CourseInfo[];

  ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }

  onSearch(courses: CourseInfo[]): void {
    this.courses = courses;
  }
}
