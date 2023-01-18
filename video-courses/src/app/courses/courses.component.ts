import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { PAGINATION } from 'src/app/shared/constants';

import { ButtonType } from '../shared/enums/button.enum';
import { CoursesService } from './services/courses.service';
import { CourseInfo } from './types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  readonly buttonType = ButtonType.Add;

  coursesCount = PAGINATION.SIZE;
  searchValue = '';
  showPaginationButton = false;

  courses: CourseInfo[];

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.initCourses();
  }

  addCourse(): void {
    this.router.navigate(['courses', 'new']);
  }

  onSearch(searchValue: string): void {
    this.initCourses(this.coursesCount, searchValue);
    this.searchValue = searchValue;
  }

  paginateCourses(totalCount: number): void {
    this.initCourses(totalCount, this.searchValue);
    this.coursesCount = totalCount;
  }

  private initCourses(courseCount = PAGINATION.SIZE, searchValue = ''): void {
    this.coursesService
      .getCourses(courseCount, searchValue)
      .subscribe((courses) => {
        this.courses = courses;
        this.setPaginationBtnVisability(courses.length);
        this.cdr.markForCheck();
      });
  }

  private setPaginationBtnVisability(coursesLength: number): void {
    this.showPaginationButton = !!coursesLength;

    if (this.coursesCount > coursesLength) {
      this.showPaginationButton = false;
    }
  }
}
