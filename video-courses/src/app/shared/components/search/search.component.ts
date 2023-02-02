import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output, } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, filter, map, Subject, Subscription, } from 'rxjs';
import { SEARCH_OPTIONS } from '../../constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter();

  readonly searchIcon = faSearch;
  readonly keyUp = new Subject<KeyboardEvent>();

  private subscription: Subscription;

  constructor() {
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private onSearch(): void {
    this.subscription = this.keyUp
      .pipe(
        map((event) => (event?.target as HTMLInputElement)?.value.trim()),
        filter((event) => !event || event.length >= SEARCH_OPTIONS.MIN_LENGTH),
        debounceTime(SEARCH_OPTIONS.DEBOUNCE),
        distinctUntilChanged()
      )
      .subscribe((event) => this.search.emit(event));
  }
}
