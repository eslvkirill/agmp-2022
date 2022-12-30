import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { ButtonType } from '../shared/enums/button.enum';
import { CoursesService } from './services/courses.service';
import { CourseInfo } from './types/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  readonly buttonType = ButtonType.Add;

  courses: CourseInfo[];

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.initCourses();
  }

  onSearch(courses: CourseInfo[]): void {
    this.courses = courses;
  }

  addCourse(): void {
    this.router.navigate(['courses', 'new']);
  }

  private initCourses(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.cdr.markForCheck();
    });
  }
}
