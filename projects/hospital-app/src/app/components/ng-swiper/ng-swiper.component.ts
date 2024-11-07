import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgButtonComponent } from 'NgButton';

@Component({
  selector: 'app-ng-swiper',
  standalone: true,
  imports: [NgButtonComponent,NzIconModule,RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ng-swiper.component.html',
  styleUrl: './ng-swiper.component.less'
})
export class NgSwiperComponent {
  breakpoints= {
    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200:{
      slidesPerView:4,
      spaceBetween: 10,
    }, 
    1500:{
      slidesPerView:6,
      spaceBetween: 10,
    },
    1600:{
      slidesPerView:6,
      spaceBetween: 10,
    }
  };

  @Input({alias:'slidesPerView'}) slidesPerView:number = 6;

  @Input({alias:'spaceBetween'}) spaceBetween:number = 50;

  @Input({alias:'navigation'}) navigation:boolean = true;

  @Input({alias:'pagination'}) pagination:boolean = false;


  @Input({alias:'dataSource'}) dataSource:any = [];


  onSliderChange = output<void>();

  onSwiper = output<any>();

 
  onSwiperChangeEvent(event: any):void{
      // this.onSwiper.emit(event);
  }

  onSlideChangeEvent():void{
    // this.onSliderChange.emit();
  }


}
