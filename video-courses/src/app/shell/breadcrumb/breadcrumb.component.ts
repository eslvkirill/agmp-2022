import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() batchName?: string;

  constructor(private navigationService: NavigationService) {}

  goToCourses(): void {
    this.navigationService.redirectToCoursesPage();
  }
}
