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
import { CourseInfo, CoursesPaginateInfo, CoursesSearchData } from './types';

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

  courses: CourseInfo[];

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.initCourses();
  }

  onSearch(searchData: CoursesSearchData): void {
    this.courses = searchData.courses;
    this.searchValue = searchData.searchValue;
  }

  addCourse(): void {
    this.router.navigate(['courses', 'new']);
  }

  paginateCourses(paginateInfo: CoursesPaginateInfo): void {
    this.courses = paginateInfo.courses;
    this.coursesCount = paginateInfo.totalCount;
  }

  private initCourses(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.cdr.markForCheck();
    });
  }
}
