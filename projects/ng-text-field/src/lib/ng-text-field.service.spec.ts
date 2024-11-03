import { TestBed } from '@angular/core/testing';

import { NgTextFieldService } from './ng-text-field.service';

describe('NgTextFieldService', () => {
  let service: NgTextFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTextFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
