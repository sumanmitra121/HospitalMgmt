import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgAvatarComponent } from 'NgAvatar';
import { NgButtonComponent } from 'NgButton';
import { NgSwiperComponent } from '../../components/ng-swiper/ng-swiper.component';
import Module from '../../../../public/json/Module.json';
@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [NgButtonComponent,NzIconModule,NgAvatarComponent,NgSwiperComponent],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.less'
})
export class OutletComponent {
  module = Module;
}
