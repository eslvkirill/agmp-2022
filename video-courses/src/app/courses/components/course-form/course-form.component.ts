import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.courseId = id;
    this.course = this.coursesService.getItemById(id);

    this.initCourseData();
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

  private initCourseData(): void {
    if (!this.course) return;

    const { creationDate, description, duration, title } = this.course;

    this.dateValue = creationDate;
    this.titleValue = title;
    this.descriptionValue = description;
    this.durationValue = duration;
  }
}
