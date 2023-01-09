import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PAGINATION } from 'src/app/shared/constants';

import { ButtonType } from '../shared/enums/button.enum';
import { COURSES_ACTIONS, selectAllCourses } from '../store/courses';
import { CourseInfo, CoursesPaginateInfo, CoursesSearchData } from './types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  readonly buttonType = ButtonType.Add;

  private readonly courses$ = this.store.select(selectAllCourses);

  coursesCount = PAGINATION.SIZE;
  searchValue = '';

  courses: CourseInfo[];

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef,
    private router: Router
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
    this.store.dispatch(COURSES_ACTIONS.coursesInit());
    this.courses$.subscribe((courses) => {
      this.courses = courses;
      this.cdr.markForCheck();
    });
  }
}
