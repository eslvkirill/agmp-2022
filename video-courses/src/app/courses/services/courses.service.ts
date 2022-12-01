import { Injectable } from '@angular/core';

import { COURSES } from '../constants/courses.constants';
import { CourseInfo } from '../types/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getList(): CourseInfo[] {
    return COURSES;
  }

  createCourse(): void {}

  getItemById(courseId: string): CourseInfo | undefined {
    return COURSES.find((course) => course.id === courseId);
  }

  updateItem() {}

  removeItem(courseId: string): CourseInfo[] {
    return COURSES.filter((course) => course.id !== courseId);
  }
}
