import { TestBed } from '@angular/core/testing';

import { CurrentroomService } from './currentroom.service';

describe('CurrentroomService', () => {
  let service: CurrentroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
