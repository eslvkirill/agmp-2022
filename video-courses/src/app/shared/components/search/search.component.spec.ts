import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchComponent],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('searchIcon has default value', () => {
    expect(component.searchIcon).toEqual(faSearch);
  });

  it('should call onSearch method', () => {
    const onSearch = spyOn(component, 'onSearch').and.callThrough();
    component.onSearch();

    expect(onSearch).toHaveBeenCalled();
  });
});
