import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs';

import { COURSES } from '../../constants';
import { CourseInfo } from '../../types/course.interface';
import { CourseComponent } from './course.component';
import { DurationPipe } from '../../../shared/pipes/duration/duration.pipe';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let expectedCourse: CourseInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CourseComponent, DurationPipe],
    });
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;

    expectedCourse = COURSES[0];
    component.course = expectedCourse;

    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should raise delete event on click', () => {
    let selectedCourse: CourseInfo | undefined;
    component.delete
      .pipe(first())
      .subscribe((course: CourseInfo) => (selectedCourse = course));

    fixture.debugElement.query(By.css('.delete')).triggerEventHandler('click');
    expect(selectedCourse).toBe(expectedCourse);
  });

  it('should raise edit event on click', () => {
    const spy = jasmine.createSpy();
    const editButton = fixture.debugElement.query(
      By.css('.edit')
    ).nativeElement;

    component.edit.subscribe(spy);
    editButton.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(expectedCourse);
  });

  it('timeIcon has default value', () => {
    expect(component.timeIcon).toEqual(faClock);
  });

  it('dateIcon has default value', () => {
    expect(component.dateIcon).toEqual(faCalendarDays);
  });

  it('datePipe has default value', () => {
    expect(component.datePipe).toEqual('d MMM, y');
  });
});
