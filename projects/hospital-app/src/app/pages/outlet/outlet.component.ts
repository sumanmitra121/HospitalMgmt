import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgAvatarComponent } from 'NgAvatar';
import { NgButtonComponent } from 'NgButton';

@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [NgButtonComponent,NzIconModule,NgAvatarComponent],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.less'
})
export class OutletComponent {

}
