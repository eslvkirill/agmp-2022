import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEW_COURSE } from 'src/app/shared/constants';
import { getRandomNumber } from 'src/app/shared/utils/random.utils';

import { CoursesService } from '../../services/courses.service';
import { CourseInfo } from '../../types/course.interface';
import { NavigationService } from '../../../shared/services/navigation.service';

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
  course?: CourseInfo;
  courseId: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
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
    this.navigationService.redirectToCoursesPage();
  }

  private initCourse(): void {
    const { id } = this.route.snapshot.params;
    this.courseId = id;

    this.coursesService.getCourseById(id).subscribe((courses) => {
      const [course] = courses;

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
    this.coursesService.getAuthors().subscribe();
  }

  private createCourse(): void {
    if (this.isFormFieldsEmpty) return;

    this.coursesService.createCourse(this.getCourseDataOnChange).subscribe();
    this.navigationService.redirectToCoursesPage();
  }

  private updateCourse(): void {
    if (this.isFormFieldsEmpty) return;

    const course = {
      ...this.getCourseDataOnChange,
      id: Number(this.courseId),
      isTopRated: this.isTopRated,
    };

    this.coursesService.updateCourse(course).subscribe();
    this.navigationService.redirectToCoursesPage();
  }
}
