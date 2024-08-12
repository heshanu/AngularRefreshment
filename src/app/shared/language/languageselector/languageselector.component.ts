import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languageselector',
  templateUrl: './languageselector.component.html',
  styleUrl: './languageselector.component.css'
})
export class LanguageselectorComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' },
    { code: 'de', label: 'German' }
  ];

  constructor(private translate: TranslateService) {}

  changeLanguage(language: any) {
    this.translate.use(language.value);
  }
}
