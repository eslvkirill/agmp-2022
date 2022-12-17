import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseComponent {
  durationValue = 0;
  titleValue = '';
  descriptionValue = '';
  dateValue = '';
}
