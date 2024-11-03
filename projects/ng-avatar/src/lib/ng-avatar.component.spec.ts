import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAvatarComponent } from './ng-avatar.component';

describe('NgAvatarComponent', () => {
  let component: NgAvatarComponent;
  let fixture: ComponentFixture<NgAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
