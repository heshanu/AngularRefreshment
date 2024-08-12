import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageselectorComponent } from './languageselector.component';

describe('LanguageselectorComponent', () => {
  let component: LanguageselectorComponent;
  let fixture: ComponentFixture<LanguageselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
