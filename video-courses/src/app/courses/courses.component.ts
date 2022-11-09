import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonType } from '../shared/enums/button.enum';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  readonly buttonType = ButtonType.Add;
}
