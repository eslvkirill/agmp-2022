import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const TWO_WEEKS = 14;

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') creationDate: Date;

  private readonly currentDate = new Date();
  private readonly freshCourseDate = new Date();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initFreshCourseDate();
    this.setBorderColorStyle();
  }

  private setBorderColorStyle(): void {
    const { style } = this.elementRef.nativeElement;
    const isUnreleasedCourse = this.creationDate > this.currentDate;
    const isCourseFresh =
      this.creationDate < this.currentDate &&
      this.creationDate >= this.freshCourseDate;

    if (isCourseFresh || isUnreleasedCourse) {
      style.borderWidth = '4px';
      style.borderStyle = 'solid';

      if (isCourseFresh) {
        style.borderColor = 'green';
      } else if (isUnreleasedCourse) {
        style.borderColor = 'blue';
      }
    }
  }

  private initFreshCourseDate(): void {
    this.freshCourseDate.setDate(this.currentDate.getDate() - TWO_WEEKS);
  }
}
