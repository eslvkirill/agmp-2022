import { Pipe, PipeTransform } from '@angular/core';

import { CourseInfo } from '../../../courses/types/course.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: CourseInfo[], searchValue: string): any {
    if (!items.length || !searchValue) return items;

    return items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
  }
}