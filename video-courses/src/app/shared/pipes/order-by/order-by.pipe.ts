import { Pipe, PipeTransform } from '@angular/core';

import { CourseInfo } from '../../../courses/types/course.interface';
import { OrderDirection } from '../../enums/index';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: CourseInfo[], direction: string): CourseInfo[] {
    if (!courses?.length || courses.length === 1 || !direction) return courses;

    const order = direction === OrderDirection.ASC ? 1 : -1;

    return [...courses].sort((a, b) => {
      const firstElement = a.creationDate.getTime();
      const seconElement = b.creationDate.getTime();

      if (firstElement > seconElement) {
        return order;
      }
      if (seconElement > firstElement) {
        return -order;
      }
      return 0;
    });
  }
}
