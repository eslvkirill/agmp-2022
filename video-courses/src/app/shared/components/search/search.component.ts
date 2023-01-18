import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() searchValue: string;
  @Output() search: EventEmitter<string> = new EventEmitter();

  readonly searchIcon = faSearch;

  onSearch(): void {
    this.search.emit(this.searchValue);
  }
}
