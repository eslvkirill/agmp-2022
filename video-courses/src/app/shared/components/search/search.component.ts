import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  readonly searchIcon = faSearch;

  searchValue: string;

  onSearch(): void {
    console.log(this.searchValue);
  }
}
