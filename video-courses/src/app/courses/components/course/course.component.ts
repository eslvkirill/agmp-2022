import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  faCalendarDays,
  faClock,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { ButtonType } from '../../../shared/enums';
import { CourseAction, CourseInfo } from '../../types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  @Input() course: CourseInfo;

  @Output() delete: EventEmitter<CourseInfo> = new EventEmitter();
  @Output() edit: EventEmitter<CourseInfo> = new EventEmitter();

  readonly timeIcon = faClock;
  readonly dateIcon = faCalendarDays;
  readonly starIcon = faStar;
  readonly datePipe = 'd MMM, y';

  readonly actionButtons: CourseAction[] = [
    {
      text: 'Edit',
      type: ButtonType.Edit,
      action: (course: CourseInfo): void => this.edit.emit(course),
    },
    {
      text: 'Delete',
      type: ButtonType.Delete,
      action: (course: CourseInfo): void => this.delete.emit(course),
    },
  ];

  trackByFn(index: number, course: CourseAction): ButtonType {
    return course.type;
  }
}
