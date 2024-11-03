import { TestBed } from '@angular/core/testing';

import { NgButtonService } from './ng-button.service';

describe('NgButtonService', () => {
  let service: NgButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
