import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDashboardComponent } from './dummy-dashboard.component';

describe('DummyDashboardComponent', () => {
  let component: DummyDashboardComponent;
  let fixture: ComponentFixture<DummyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
