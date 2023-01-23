import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NEW_COURSE } from 'src/app/shared/constants';
import { getRandomNumber } from 'src/app/shared/utils/random.utils';
import { COURSES_ACTIONS, selectCourseById } from 'src/app/store/courses';

import { NavigationService } from '../../../../shared/services/navigation.service';
import { CourseInfo } from '../../types/course.interface';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent implements OnInit {
  courseTitleBatchName: string;

  private titleControl: AbstractControl | null;
  private course: CourseInfo | null;
  private courseId: string;

  private readonly course$ = this.store.select(selectCourseById);
  readonly formName = 'courseForm';

  readonly form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.max(50)]],
    description: ['', [Validators.required, Validators.max(500)]],
    date: [null, Validators.required],
    duration: [0, [Validators.required, Validators.min(1)]],
    isTopRated: [false],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.initCourse();
    this.initAuthors();
  }

  private get getCourseDataOnChange(): CourseInfo {
    const { title, date, duration, description, isTopRated } = this.form.value;

    return {
      id: getRandomNumber(),
      name: title,
      date: new Date(date),
      length: duration,
      description,
      isTopRated,
      authors: [
        {
          id: getRandomNumber(),
          name: 'Bradley',
          lastName: 'Cooper',
        },
      ],
    };
  }

  validateControl(controlName: string): boolean | undefined {
    const control = this.form.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  onSave(): void {
    this.courseId === NEW_COURSE.ID ? this.createCourse() : this.updateCourse();
  }

  onCancel(): void {
    this.navigationService.redirectToCoursesPage();
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
      this.initTitleControl();
      this.initCourseData();
      this.initCourseTitleBatchName();
      this.cdr.markForCheck();
    });
  }

  private initCourseData(): void {
    if (!this.course) return;

    const { date, description, length, name, isTopRated } = this.course;

    this.titleControl?.setValue(name);
    this.form.get('description')?.setValue(description);
    this.form.get('duration')?.setValue(length);
    this.form.get('date')?.setValue(new Date(date));
    this.form.get('isTopRated')?.setValue(isTopRated);
  }

  private initTitleControl(): void {
    this.titleControl = this.form.get('title');
  }

  private initCourseTitleBatchName(): void {
    this.courseTitleBatchName = this.titleControl?.value || NEW_COURSE.TITLE;
  }

  private initAuthors(): void {
    this.store.dispatch(COURSES_ACTIONS.initCourseAuthors());
  }

  private createCourse(): void {
    this.store.dispatch(
      COURSES_ACTIONS.createNewCourse({ course: this.getCourseDataOnChange })
    );
    this.onCancel();
  }

  private updateCourse(): void {
    this.store.dispatch(
      COURSES_ACTIONS.editCourse({
        course: {
          ...this.getCourseDataOnChange,
          id: Number(this.courseId),
        },
      })
    );
    this.onCancel();
  }
}
