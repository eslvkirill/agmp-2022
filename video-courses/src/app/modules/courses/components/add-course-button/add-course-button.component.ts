import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.scss'],
})
export class AddCourseButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('app-add-course-button');
  }
}
