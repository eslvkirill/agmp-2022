import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AuthorsInfo } from 'src/app/features/courses/types';

const AUTHORS_SEARCH_MIN_LENGTH = 1;

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true,
    },
  ],
})
export class AuthorsComponent implements ControlValueAccessor {
  @Input() allAuthors: AuthorsInfo[] | null;

  @Output() setAuthors: EventEmitter<AuthorsInfo[]> = new EventEmitter();

  private onTouched!: () => void;
  private onChanged!: (_: unknown) => void;

  readonly searchMinLength = AUTHORS_SEARCH_MIN_LENGTH;

  selectedAuthors: AuthorsInfo[];
  searchAuthors?: AuthorsInfo[];

  constructor(private cdr: ChangeDetectorRef) {}

  registerOnChange(fn: () => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: AuthorsInfo[]): void {
    this.selectedAuthors = value;
    this.cdr.markForCheck();
  }

  search(searchValue: string): void {
    this.searchAuthors = this.allAuthors?.filter(
      (author) => searchValue && author.name.includes(searchValue)
    );
  }

  removeAuthor(authorId: string | number): void {
    this.selectedAuthors = this.selectedAuthors.filter(
      (author) => author.id !== authorId
    );
    this.setAuthors.emit(this.selectedAuthors);
  }

  addAuthor(author: AuthorsInfo): void {
    const isAuthorExists = this.selectedAuthors.some(
      (selectedAuthor) => selectedAuthor.id === author.id
    );

    if (isAuthorExists) return;

    this.selectedAuthors = [...this.selectedAuthors, author];
    this.setAuthors.emit(this.selectedAuthors);
  }
}
