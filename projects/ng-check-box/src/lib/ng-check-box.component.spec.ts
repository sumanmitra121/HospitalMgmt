import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCheckBoxComponent } from './ng-check-box.component';

describe('NgCheckBoxComponent', () => {
  let component: NgCheckBoxComponent;
  let fixture: ComponentFixture<NgCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCheckBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
