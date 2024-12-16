import { TestBed } from '@angular/core/testing';

import { SweetNotificationService } from './sweet-notification.service';

describe('SweetNotificationService', () => {
  let service: SweetNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
