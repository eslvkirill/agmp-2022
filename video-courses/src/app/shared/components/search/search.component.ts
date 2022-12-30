import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { CoursesService } from '../../../courses/services/courses.service';
import { CoursesSearchData } from '../../../courses/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() totalCount: number;
  @Output() search: EventEmitter<CoursesSearchData> = new EventEmitter();

  readonly searchIcon = faSearch;

  searchValue: string;

  constructor(private coursesService: CoursesService) {}

  onSearch(): void {
    this.coursesService
      .getCourses(this.totalCount, this.searchValue)
      .subscribe((courses) =>
        this.search.emit({ courses, searchValue: this.searchValue })
      );
  }
}
