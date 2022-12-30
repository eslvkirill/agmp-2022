import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';

import { CoursesService } from '../../../courses/services/courses.service';
import { CoursesSearchData } from '../../../courses/types';
import { SEARCH_OPTIONS } from '../../constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnDestroy {
  @Input() coursesCount: number;
  @Output() search: EventEmitter<CoursesSearchData> = new EventEmitter();

  readonly searchIcon = faSearch;

  readonly keyUp = new Subject<KeyboardEvent>();

  private subscription: Subscription;
  private searchValue: string;

  constructor(private coursesService: CoursesService) {
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private onSearch(): void {
    this.subscription = this.keyUp
      .pipe(
        map((event) =>
          (this.searchValue = (event?.target as HTMLInputElement)?.value).trim()
        ),
        filter((event) => event.length >= SEARCH_OPTIONS.MIN_LENGTH),
        debounceTime(SEARCH_OPTIONS.DEBOUNCE),
        distinctUntilChanged(),
        switchMap((event) =>
          this.coursesService.getCourses(this.coursesCount, event)
        )
      )
      .subscribe((courses) =>
        this.search.emit({ courses, searchValue: this.searchValue })
      );
  }
}
