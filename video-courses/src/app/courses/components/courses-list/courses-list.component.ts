import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { OrderDirection } from '../../../shared/enums/orderDirection.enum';
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

  trackByFn(index: number, course: CourseInfo): string {
    return course.id;
  }

  onEdit(course: any): void {
    console.log('Edit: ', course.id);
  }

  onDelete(course: any): void {
    console.log('Delete: ', course.id);
  }
}
