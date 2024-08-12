import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languageselector',
  templateUrl: './languageselector.component.html',
  styleUrl: './languageselector.component.css'
})
export class LanguageselectorComponent implements OnInit{

  languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'de', label: 'Deutsch' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use('en');
  }

  changeLanguage(language: any) {
    this.translate.use(language.value);
  }
}
