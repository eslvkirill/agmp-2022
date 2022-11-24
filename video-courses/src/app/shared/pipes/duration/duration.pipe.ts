import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;

    return `${hours ? hours + 'h' : ''} ${minutes ? minutes + 'min' : ''}`;
  }
}
