import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { COURSES } from '../../../courses/constants/courses.constants';
import { CourseInfo } from '../../../courses/types/course.interface';
import { FilterPipe } from '../../pipes/filter/filter.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Output() search: EventEmitter<CourseInfo[]> = new EventEmitter();

  readonly searchIcon = faSearch;

  searchValue: string;

  constructor(private filterPipe: FilterPipe) {}

  onSearch(): void {
    const filteredCourses = this.filterPipe.transform(
      COURSES,
      this.searchValue
    );

    this.search.emit(filteredCourses);
  }
}
