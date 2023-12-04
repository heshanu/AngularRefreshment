import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulebComponent } from './moduleb.component';

describe('ModulebComponent', () => {
  let component: ModulebComponent;
  let fixture: ComponentFixture<ModulebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModulebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
