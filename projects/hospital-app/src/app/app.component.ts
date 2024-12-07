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
  isRoutingStart: boolean = true;
  constructor(private router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        this.isRoutingStart = true
      }
      if (event instanceof NavigationEnd) {
        this.isRoutingStart = false
      }

      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.isRoutingStart = false
      }
      if (event instanceof NavigationError) {
        this.isRoutingStart = false
      }
    });
  }
}
