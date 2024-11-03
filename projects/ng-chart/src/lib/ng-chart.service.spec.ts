import { TestBed } from '@angular/core/testing';

import { NgChartService } from './ng-chart.service';

describe('NgChartService', () => {
  let service: NgChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
