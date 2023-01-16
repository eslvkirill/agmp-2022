import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { COURSES } from '../../constants/courses.constants';
import { CourseInfo } from '../../types/course.interface';
import { CoursesListComponent } from './courses-list.component';
import { ModalService } from '../../../shared/services/modal.service';
import { CoursesService } from '../../services/courses.service';
import { OrderByPipe } from '../../../shared/pipes/order-by/order-by.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let expectedCourses: CourseInfo[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CoursesListComponent, OrderByPipe],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: ModalService, useValue: {} },
        { provide: CoursesService, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;

    expectedCourses = COURSES;
    component.courses = expectedCourses;

    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog onDelete method', () => {
    const modalDialogMock = jasmine.createSpyObj('ModalService', [
      'openDialog',
    ]);
    modalDialogMock.openDialog.and.callThrough();
  });

  it('should call onEdit method', () => {
    const onEdit = spyOn(component, 'onEdit').and.callThrough();
    component.onEdit(expectedCourses[0]);

    expect(onEdit).toHaveBeenCalled();
  });
});
