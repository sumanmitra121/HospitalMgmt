import { Component, Input } from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, NgApexchartsModule} from 'ng-apexcharts';
@Component({
  selector: 'lib-ngChart',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <p>
      ng-chart works!
    </p>
  `,
  styles: ``
})

export class NgChartComponent {

  /*** For Chart data to populate */
  @Input({alias:'series'}) series:ApexAxisChartSeries = [];

  @Input({alias:'chart'}) chart!:ApexChart;

  @Input({alias:'xAxis'}) xAxis!:ApexXAxis;

  @Input({alias:'yAxis'}) yAxis!:ApexYAxis;

}
