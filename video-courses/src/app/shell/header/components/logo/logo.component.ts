import { ChangeDetectionStrategy, Component } from '@angular/core';
import { START_PAGE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly startPageUrl = START_PAGE_URL;
}
