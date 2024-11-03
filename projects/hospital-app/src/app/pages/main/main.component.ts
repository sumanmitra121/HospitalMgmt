import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import menu from '../../../../public/json/menus.json';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SecondaryNavComponent } from '../../components/secondary-nav/secondary-nav.component';
import { ThemeService } from '../../service/theme/theme.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { NgButtonComponent } from 'NgButton';
import { NzDrawerModule, NzDrawerService } from 'ng-zorro-antd/drawer';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NzLayoutModule,
    CommonModule,
    TopNavComponent, 
    SecondaryNavComponent,
    NzIconModule,
    NzMenuModule,
    NgButtonComponent,
    SideBarComponent,
    NzDrawerModule,
    ReactiveFormsModule,
    NzDividerModule,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
})
export class MainComponent {
  isCollapsed = false;

  navMenu = menu;

  isVisible:boolean = false;

  appLayout: 'horizontal' | 'vertical' = 'horizontal';

  theme = inject(ThemeService);

  themeForm!:FormGroup<{
    theme:FormControl<any>;
    layout:FormControl<any>;
  }> 

  constructor(private fb: NonNullableFormBuilder,private router: Router,private drawerService: NzDrawerService) {

   
    this.themeForm = fb.group({
      theme:[this.theme.currentTheme],
      layout:[''],
    })
    this.checkLayoutStatus();
    this.observeAppTheme();
    // router.events.forEach(el => {
    //   if (el instanceof NavigationEnd) {
    //     console.log(el.url)
    //   }
    // });
  }

  observeAppTheme(){
    this.theme.appTheme$.subscribe(res =>{
      this.themeForm.patchValue({
        theme:res
      });
    })
  
  }

  changeTheme(themeType:any){
      if(this.theme.currentTheme != themeType){
        this.theme.toggleTheme();
      }
  }

  checkLayoutStatus():void {
        this.theme.currentLayout$.subscribe(res =>{
            this.appLayout = res;
            this.themeForm.patchValue({
              layout:res
            })
        })
  }

  changeLayout(layoutType:any){
    if(this.theme.currentLayout$.value != layoutType){
      this.theme.toggleLayout(layoutType)
    }
  }
}
