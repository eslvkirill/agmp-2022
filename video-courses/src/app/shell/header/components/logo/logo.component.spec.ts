import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LogoComponent } from './logo.component';
import { START_PAGE_URL } from 'src/app/shared/constants';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LogoComponent],
    });
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('startPageUrl has default value', () => {
    expect(component.startPageUrl).toEqual(START_PAGE_URL);
  });
});
