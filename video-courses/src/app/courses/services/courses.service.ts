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

  createCourse(): any {}

  getItemById(courses: CourseInfo[], courseId: string): CourseInfo | undefined {
    return courses.find((course) => course.id === courseId);
  }

  updateItem() {}

  removeItem(courses: CourseInfo[], courseId: string): CourseInfo[] {
    return courses.filter((course) => course.id !== courseId);
  }
}
