import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { PAGINATION } from '../../constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() coursesCount: number;
  @Output() paginateCourses: EventEmitter<number> = new EventEmitter();

  paginate(): void {
    this.coursesCount += PAGINATION.SIZE;
    this.paginateCourses.emit(this.coursesCount);
  }
}
