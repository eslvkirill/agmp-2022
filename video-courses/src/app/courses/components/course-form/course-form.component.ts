import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  course?: CourseInfo;
  courseId?: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.initCourse();
  }

  onSave(): void {
    this.courseId
      ? this.coursesService.createCourse()
      : this.coursesService.updateItem();

    this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }

  private initCourse(): void {
    const { id } = this.route.snapshot.params;
    this.courseId = id;

    this.coursesService.getCourseById(id).subscribe((courses) => {
      const [course] = courses;

      this.course = course;
      this.initCourseData();
      this.cdr.markForCheck();
    });
  }

  private initCourseData(): void {
    if (!this.course) return;

    const { date, description, length, name } = this.course;

    this.dateValue = date;
    this.titleValue = name;
    this.descriptionValue = description;
    this.durationValue = length;
  }
}
