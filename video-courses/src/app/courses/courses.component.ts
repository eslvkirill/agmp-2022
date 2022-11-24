import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonType } from '../shared/enums/button.enum';
import { CourseInfo } from './types/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  @Input() courses: CourseInfo[];

  readonly buttonType = ButtonType.Add;
}
