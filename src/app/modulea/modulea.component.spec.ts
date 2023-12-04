import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleaComponent } from './modulea.component';

describe('ModuleaComponent', () => {
  let component: ModuleaComponent;
  let fixture: ComponentFixture<ModuleaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
