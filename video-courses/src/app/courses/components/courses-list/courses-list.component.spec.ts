import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COURSES } from '../../constants/courses.constants';
import { CourseInfo } from '../../types/course.interface';
import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let expectedCourses: CourseInfo[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CoursesListComponent],
    });
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;

    expectedCourses = COURSES;
    component.courses = expectedCourses;

    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should courses initialized', () => {
    component.ngOnInit();
    expect(component.courses).toBe(COURSES);
  });

  it('should call onDelete method', () => {
    const onDelete = spyOn(component, 'onDelete').and.callThrough();
    component.onDelete(expectedCourses[0]);

    expect(onDelete).toHaveBeenCalled();
  });

  it('should call onEdit method', () => {
    const onEdit = spyOn(component, 'onEdit').and.callThrough();
    component.onEdit(expectedCourses[0]);

    expect(onEdit).toHaveBeenCalled();
  });
});
