import { Component, HostListener } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgAvatarComponent } from 'NgAvatar';
import { NgButtonComponent } from 'NgButton';
import { NgSwiperComponent } from '../../components/ng-swiper/ng-swiper.component';
import Module from '../../../../public/json/Module.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [NgButtonComponent,NzIconModule,NgAvatarComponent,NgSwiperComponent,CommonModule],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.less'
})
export class OutletComponent {
  module = Module;
  isActivateHeaderBckColor:boolean = false;
  @HostListener("document:scroll")
  onScroll(){
        this.isActivateHeaderBckColor = document.body.scrollTop > 40 || document.documentElement.scrollTop > 40;
        console.log(this.isActivateHeaderBckColor)
      }
}
