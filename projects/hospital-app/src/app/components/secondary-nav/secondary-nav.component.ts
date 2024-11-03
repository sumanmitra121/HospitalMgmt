import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import menu from '../../../../public/json/menus.json';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'SecondaryNav',
  standalone: true,
  imports: [NzLayoutModule,CommonModule,NzIconModule,NzMenuModule],
  templateUrl: './secondary-nav.component.html',
  styleUrl: './secondary-nav.component.less'
})
export class SecondaryNavComponent {
  navMenu = menu;
}
