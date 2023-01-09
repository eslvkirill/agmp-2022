import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NEW_COURSE } from 'src/app/shared/constants';
import { getRandomNumber } from 'src/app/shared/utils/random.utils';
import { COURSES_ACTIONS, selectCourseById } from 'src/app/store/courses';

import { CoursesService } from '../../services/courses.service';
import { CourseInfo } from '../../types/course.interface';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent implements OnInit {
  durationValue: number;
  titleValue: string;
  descriptionValue: string;
  dateValue: Date;
  isTopRated: boolean;
  courseTitleBatchName: string;
  course: CourseInfo | null;
  courseId: string;

  private readonly course$ = this.store.select(selectCourseById);

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.initCourse();
    this.initAuthors();
  }

  get isFormFieldsEmpty(): boolean {
    return (
      !this.titleValue ||
      !this.dateValue ||
      !this.durationValue ||
      !this.descriptionValue
    );
  }

  get getCourseDataOnChange(): CourseInfo {
    return {
      id: getRandomNumber(),
      name: this.titleValue,
      date: new Date(this.dateValue),
      length: this.durationValue,
      description: this.descriptionValue,
      authors: [
        {
          id: getRandomNumber(),
          name: 'Bradley',
          lastName: 'Cooper',
        },
      ],
      isTopRated: true,
    };
  }

  onSave(): void {
    this.courseId === NEW_COURSE.ID ? this.createCourse() : this.updateCourse();
  }

  onCancel(): void {
    this.coursesService.redirectToCoursesPage();
  }

  private initCourse(): void {
    const { id } = this.route.snapshot.params;
    this.courseId = id;

    this.courseId === NEW_COURSE.ID
      ? this.initCourseTitleBatchName()
      : this.setExistingCourse(Number(this.courseId));
  }

  private setExistingCourse(courseId: number): void {
    this.store.dispatch(COURSES_ACTIONS.getCoursebyId({ id: courseId }));
    this.course$.subscribe((course) => {
      this.course = course;
      this.initCourseData();
      this.initCourseTitleBatchName();
      this.cdr.markForCheck();
    });
  }

  private initCourseData(): void {
    if (!this.course) return;

    const { date, description, length, name, isTopRated } = this.course;

    this.dateValue = date;
    this.titleValue = name;
    this.descriptionValue = description;
    this.durationValue = length;
    this.isTopRated = isTopRated;
  }

  private initCourseTitleBatchName(): void {
    this.courseTitleBatchName = this.titleValue || NEW_COURSE.TITLE;
  }

  private initAuthors(): void {
    this.store.dispatch(COURSES_ACTIONS.initCourseAuthors());
  }

  private createCourse(): void {
    if (this.isFormFieldsEmpty) return;

    this.store.dispatch(
      COURSES_ACTIONS.createNewCourse({ course: this.getCourseDataOnChange })
    );
    this.onCancel();
  }

  private updateCourse(): void {
    if (this.isFormFieldsEmpty) return;

    const course = {
      ...this.getCourseDataOnChange,
      id: Number(this.courseId),
      isTopRated: this.isTopRated,
    };

    this.store.dispatch(COURSES_ACTIONS.editCourse({ course: course }));
    this.onCancel();
  }
}
