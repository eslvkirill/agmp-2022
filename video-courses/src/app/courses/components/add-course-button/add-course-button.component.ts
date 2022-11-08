import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('app-add-course-button');
  }
}
