import { Component, OnInit } from '@angular/core';

import { COURSES } from './courses/constants/courses.constants';
import { CourseInfo } from './courses/types/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courses: CourseInfo[];

  ngOnInit(): void {
    this.courses = COURSES;
  }

  onSearch(courses: CourseInfo[]): void {
    this.courses = courses;
  }
}
