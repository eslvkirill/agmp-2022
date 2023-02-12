import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectComponent {
  constructor(private translate: TranslateService) {}

  onChangeLanguage(language: any): void {
    if (language.target.value !== 'en') {
      this.translate.setDefaultLang('de');
      return;
    }
    this.translate.setDefaultLang('en');
  }
}
