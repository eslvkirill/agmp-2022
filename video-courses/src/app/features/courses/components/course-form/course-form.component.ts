import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
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
import {
  COURSES_ACTIONS,
  selectCourseAuthors,
  selectCourseById,
} from 'src/app/store/courses';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { AuthorsInfo, CourseInfo } from '../../types';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent implements OnInit {
  courseTitleBatchName: string;

  private course: CourseInfo | null;
  private courseId: string;

  private titleControl: AbstractControl | null;
  private descriptionControl: AbstractControl | null;
  private durationControl: AbstractControl | null;
  private dateControl: AbstractControl | null;
  private authorsControl: AbstractControl | null;
  private isTopRatedControl: AbstractControl | null;

  private readonly course$ = this.store.select(selectCourseById);
  readonly authors$ = this.store.select(selectCourseAuthors);

  readonly formName = 'courseForm';

  readonly form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.max(50)]],
    description: ['', [Validators.required, Validators.max(500)]],
    date: [null, Validators.required],
    duration: [0, [Validators.required, Validators.min(1)]],
    authors: [[], Validators.required],
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
    const { title, date, duration, description, authors, isTopRated } =
      this.form.value;

    return {
      id: getRandomNumber(),
      name: title,
      date: new Date(date),
      length: duration,
      description,
      authors,
      isTopRated,
    };
  }

  validateControl(controlName: string): boolean | undefined {
    const control = this.form.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  setAuthors(authors: AuthorsInfo[]): void {
    this.authorsControl?.setValue(authors);
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
    this.initControls();
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

    const { date, description, length, name, authors, isTopRated } =
      this.course;

    this.titleControl?.setValue(name);
    this.descriptionControl?.setValue(description);
    this.durationControl?.setValue(length);
    this.dateControl?.setValue(new Date(date));
    this.authorsControl?.setValue(authors);
    this.isTopRatedControl?.setValue(isTopRated);
  }

  private initControls(): void {
    this.titleControl = this.form.get('title');
    this.descriptionControl = this.form.get('description');
    this.durationControl = this.form.get('duration');
    this.dateControl = this.form.get('date');
    this.authorsControl = this.form.get('authors');
    this.isTopRatedControl = this.form.get('isTopRated');
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
