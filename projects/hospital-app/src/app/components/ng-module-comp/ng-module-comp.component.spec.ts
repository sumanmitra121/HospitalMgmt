import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModuleCompComponent } from './ng-module-comp.component';

describe('NgModuleCompComponent', () => {
  let component: NgModuleCompComponent;
  let fixture: ComponentFixture<NgModuleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModuleCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModuleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
