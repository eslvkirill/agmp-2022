import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import {
  CourseInfo,
  CoursesPaginateInfo,
} from 'src/app/features/courses/types';

import { PAGINATION } from '../../constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() coursesCount: number;
  @Input() searchValue: string;

  @Output() paginateCourses: EventEmitter<CoursesPaginateInfo> =
    new EventEmitter();

  showButton = true;

  constructor(private coursesService: CoursesService) {}

  paginate(): void {
    this.coursesCount += PAGINATION.SIZE;
    this.coursesService
      .getCourses(this.coursesCount, this.searchValue)
      .subscribe((courses) => {
        this.paginateCourses.emit({ courses, totalCount: this.coursesCount });
        this.setVisiblePaginationBtn(courses);
      });
  }

  private setVisiblePaginationBtn(courses: CourseInfo[]): void {
    if (this.coursesCount > courses.length) {
      this.showButton = false;
    }
  }
}
