import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { filter, Observable } from 'rxjs';
import { ModalResponse } from 'src/app/shared/types';

import { OrderDirection } from '../../../shared/enums/orderDirection.enum';
import { ModalService } from '../../../shared/services/modal/modal.service';
import { CoursesService } from '../../services/courses.service';
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
  readonly orderDirection = OrderDirection.DESC;

  constructor(
    private cdr: ChangeDetectorRef,
    private modalService: ModalService,
    private coursesService: CoursesService
  ) {}

  trackByFn(index: number, course: CourseInfo): string {
    return course.id;
  }

  onEdit(course: any): any {
    console.log('Edit: ', course.id);
  }

  onDelete(course: any): void {
    this.openModal()
      .pipe(filter((result) => result?.value?.result))
      .subscribe(() => {
        this.courses = this.coursesService.removeItem(this.courses, course.id);
        this.cdr.markForCheck();
      });
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
