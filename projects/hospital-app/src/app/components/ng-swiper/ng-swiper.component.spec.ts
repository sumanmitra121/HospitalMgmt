import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwiperComponent } from './ng-swiper.component';

describe('NgSwiperComponent', () => {
  let component: NgSwiperComponent;
  let fixture: ComponentFixture<NgSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
