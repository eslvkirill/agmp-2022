import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CourseInfo } from 'src/app/courses/types';

import { PAGINATION } from '../../../shared/constants';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Output() paginateCourses: EventEmitter<CourseInfo[]> = new EventEmitter();

  private courseCount = PAGINATION.SIZE;

  showButton = true;

  constructor(private coursesService: CoursesService) {}

  paginate(): void {
    this.courseCount += PAGINATION.SIZE;
    this.coursesService.getCourses(this.courseCount).subscribe((courses) => {
      this.paginateCourses.emit(courses);
      this.setVisiblePaginationBtn(courses);
    });
  }

  private setVisiblePaginationBtn(courses: CourseInfo[]): void {
    if (this.courseCount > courses.length) {
      this.showButton = false;
    }
  }
}
