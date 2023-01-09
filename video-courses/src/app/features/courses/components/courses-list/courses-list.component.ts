import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { ModalResponse } from 'src/app/shared/types';
import { COURSES_ACTIONS } from 'src/app/store/courses';

import { ModalService } from '../../../../shared/services/modal/modal.service';
import { CourseInfo } from '../../types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent {
  @Input() courses: CourseInfo[];

  readonly noDataMessage = 'Feel free to add new course';

  constructor(
    private store: Store,
    private modalService: ModalService,
    private router: Router
  ) {}

  trackByFn(index: number, course: CourseInfo): number {
    return course.id;
  }

  onEdit(course: CourseInfo): void {
    this.router.navigate(['courses', course.id]);
  }

  onDelete(course: CourseInfo): void {
    this.openModal()
      .pipe(filter((result) => result?.value?.result))
      .subscribe(() =>
        this.store.dispatch(COURSES_ACTIONS.deleteCourse({ id: course.id }))
      );
  }

  private openModal(): Observable<ModalResponse> {
    return this.modalService
      .openDialog({
        messageInformation: {
          title: 'Delete',
          messageText: 'Do you really want to delete this course?',
        },
      })
      .afterClosed();
  }
}
