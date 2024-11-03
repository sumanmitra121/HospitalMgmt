import { TestBed } from '@angular/core/testing';

import { NgAvatarService } from './ng-avatar.service';

describe('NgAvatarService', () => {
  let service: NgAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
