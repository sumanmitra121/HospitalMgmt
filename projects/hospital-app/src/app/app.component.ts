import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'hospital-app';
  isRoutingStart:boolean = true;
  constructor(private router: Router){
      router.events.forEach(event => {
          this.isRoutingStart = event instanceof NavigationEnd;
    });
  }
}
