import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivationStart, Params, Router } from '@angular/router';
import { NEW_COURSE_ID } from 'src/app/shared/constants';

import { CoursesService } from '../../courses/services/courses.service';

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

    id === NEW_COURSE_ID
      ? this.getNewCourseTitle()
      : this.getExistenceCourseTitle(id);
  }

  private getNewCourseTitle(): void {
    this.courseTitle = NEW_COURSE_TITLE;
    this.cdr.markForCheck();
  }

  private getExistenceCourseTitle(id: number): void {
    this.coursesService.getCourseById(id).subscribe((courses) => {
      const [course] = courses;
      this.courseTitle = course.name;
      this.cdr.markForCheck();
    });
  }

  private resetCourseTitle(): void {
    this.courseTitle = '';
    this.cdr.markForCheck();
  }
}
