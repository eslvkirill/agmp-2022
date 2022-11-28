import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { ButtonType } from '../shared/enums/button.enum';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CoursesComponent],
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('buttonType has default value', () => {
    expect(component.buttonType).toEqual(ButtonType.Add);
  });
});
