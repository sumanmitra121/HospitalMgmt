import { TestBed } from '@angular/core/testing';

import { NgCheckBoxService } from './ng-check-box.service';

describe('NgCheckBoxService', () => {
  let service: NgCheckBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCheckBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
