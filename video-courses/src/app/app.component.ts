import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }

  ngOnInit() {
    // Client only
    // if (isPlatformBrowser(this.platformId)) {
    //   const item = { key: 'value' };
    //   localStorage.setItem('itemIndex', JSON.stringify(item));
    // }
  }
}
