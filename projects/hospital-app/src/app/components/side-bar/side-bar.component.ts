import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterLink } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'SideBar',
  standalone: true,
  imports: [NzMenuModule,CommonModule,NzIconModule,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.less'
})
export class SideBarComponent {
  isCollapsed = false;

  @Input({alias:'menu'}) navMenu:any = [];

}
