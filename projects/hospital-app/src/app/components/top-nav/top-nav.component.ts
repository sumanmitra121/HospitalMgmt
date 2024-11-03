import { Component, inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgButtonComponent } from 'NgButton';
import { LayoutType, ThemeService } from '../../service/theme/theme.service';
import { NgAvatarComponent } from 'NgAvatar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'TopNav',
  standalone: true,
  imports: [NgButtonComponent,NzIconModule,
    
    NgAvatarComponent,NzLayoutModule,NzDropDownModule,CommonModule,NzInputModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.less'
})
export class TopNavComponent {

  theme = inject(ThemeService);
  
  appLayout:LayoutType = 'horizontal';

  constructor(){
    this.theme.currentLayout$.subscribe(res =>{
      this.appLayout = res;
    })
  }

  toggleTheme(themeType:string){
    console.log(themeType)
    if(this.theme.currentTheme != themeType){
    this.theme.toggleTheme().then(res =>{})
    }
  }

  toggleLayout(appLayoutType:LayoutType): void{
       this.theme.toggleLayout(appLayoutType) 
  }

}
