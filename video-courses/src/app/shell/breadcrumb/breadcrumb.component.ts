import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CoursesService } from 'src/app/features/courses/services/courses.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() batchName?: string;

  constructor(private coursesService: CoursesService) {}

  goToCourses(): void {
    this.coursesService.redirectToCoursesPage();
  }
}
