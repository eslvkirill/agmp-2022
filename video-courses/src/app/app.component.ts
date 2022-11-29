import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CoursesService } from './courses/services/courses.service';
import { CourseInfo } from './courses/types/course.interface';
import { AuthService } from './shell/header/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private coursesService: CoursesService
  ) {}

  courses: CourseInfo[];
  isAuthenticated: boolean;

  ngOnInit(): void {
    this.authentication();
    this.initCourses();
  }

  onSearch(courses: CourseInfo[]): void {
    this.courses = courses;
  }

  setAuth(): void {
    this.authentication();
    this.initCourses();
  }

  private initCourses(): void {
    if (this.isAuthenticated) {
      this.courses = this.coursesService.getList();
    }
  }

  private authentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
