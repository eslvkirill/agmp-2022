import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivationStart, Params, Router } from '@angular/router';

import { CoursesService } from '../../courses/services/courses.service';

const NEW_COURSE_ID = 'new';
const NEW_COURSE_TITLE = 'New Course';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit {
  courseTitle?: string;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.initCourseBatchTitle();
  }

  goToCourses(): void {
    this.router.navigate(['courses']);
  }

  private initCourseBatchTitle(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof ActivationStart)) return;

      const { params } = event.snapshot;

      if (Object.keys(params).length) {
        this.setCourseTitle(params);
        return;
      }

      this.resetCourseTitle();
    });
  }

  private setCourseTitle(params: Params): void {
    const { id } = params;

    this.courseTitle =
      id === NEW_COURSE_ID
        ? NEW_COURSE_TITLE
        : this.coursesService.getItemById(id)?.title;

    this.cdr.markForCheck();
  }

  private resetCourseTitle(): void {
    this.courseTitle = '';
    this.cdr.markForCheck();
  }
}
