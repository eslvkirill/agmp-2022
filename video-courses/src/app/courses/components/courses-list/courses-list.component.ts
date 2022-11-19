import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { COURSES } from '../../constants/index';
import { CourseInfo } from '../../types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
  courses: CourseInfo[];

  ngOnInit(): void {
    this.courses = COURSES;
  }

  trackByFn(index: number, course: CourseInfo): string {
    return course.id;
  }

  onEdit(course: any): void {
    console.log('Edit: ', course.id);
  }

  onDelete(course: any): void {
    console.log('Delete: ', course.id);
  }
}
