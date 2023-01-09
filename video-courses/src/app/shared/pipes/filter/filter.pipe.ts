import { Pipe, PipeTransform } from '@angular/core';
import { CourseInfo } from 'src/app/features/courses/types';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: CourseInfo[], searchValue: string): CourseInfo[] {
    if (!items.length || !searchValue) return items;

    return items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
  }
}
