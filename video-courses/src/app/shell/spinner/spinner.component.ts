import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';

import { SpinnerService } from '../header/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly isLoading: Subject<boolean> = this.spinnerService.isLoading;

  constructor(private spinnerService: SpinnerService) {}
}
