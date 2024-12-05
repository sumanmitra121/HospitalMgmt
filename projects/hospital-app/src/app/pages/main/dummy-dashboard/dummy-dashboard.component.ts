import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgButtonComponent } from 'NgButton';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { ThemeService } from '../../../service/theme/theme.service';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzCalendarModule } from 'ng-zorro-antd/calendar'; NzCalendarModule
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { ApexGrid, ApexResponsive, ApexTheme, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import {  NzFlexModule } from 'ng-zorro-antd/flex';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NgTextFieldComponent } from 'NgTextField';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  theme: ApexTheme;
  responsive: ApexResponsive,
};

export interface Data {
  id: number;
  id_code:string;
  time:string;
  name: string;
  age: number;
  created_date:string;
  type:string;
  address: string;
  disabled: boolean;
  action:string;
  patient_status:string;
}

@Component({
  selector: 'app-dummy-dashboard',
  standalone: true,
  imports: [
    NzSelectModule,
    FormsModule,
    CommonModule,
    NgButtonComponent,NzFlexModule,
    NzIconModule,NzDropDownModule,
    NzGridModule, NzDatePickerModule,NzSegmentedModule,NzTableModule,NzAlertModule,NzListModule,
    NzTypographyModule, NzDividerModule, NzBadgeModule, NgApexchartsModule,NgTextFieldComponent,
    NzProgressModule, NzCardModule],
  templateUrl: './dummy-dashboard.component.html',
  styleUrl: './dummy-dashboard.component.less'
})
export class DummyDashboardComponent {
  theme = inject(ThemeService);
  @ViewChild("chart") chart!: ChartComponent;

  public chartOptions!: Partial<ChartOptions>;

  date = null;
  options: NzSegmentedOptions = [
    { value: 'bar-chart', icon: 'bar-chart' },
    { value: 'pie-chart', icon: 'pie-chart' }
  ];
  selectedIndex=0;
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  constructor() {
    this.chartOptions = {
      theme: {
        mode: this.theme.currentTheme == 'dark' ? 'dark' : 'light',
      },
      stroke: {
        colors: ["transparent"],
        width: 3
      },
      grid: {
        show: false,
      }
      ,
      series: [
        {
          name: "Patient",
          data: [
            {
              x: 'Monday',
              y: 950,
              fillColor: '#0ea897'
            },
            {
              x: 'Tuesday',
              y: 792,
              fillColor: '#0ea897'
            },
            {
              x: 'Wednesday',
              y: 501,
              fillColor: '#0ea897'
            }, {
              x: 'Thursday',
              y: 800,
              fillColor: '#0ea897'
            }, {
              x: 'Friday',
              y: 500,
              fillColor: '#0ea897'
            }, {
              x: 'Saturday',
              y: 500,
              fillColor: '#0ea897'
            }, {
              x: 'Sunday',
              y: 280,
              fillColor: '#0ea897'
            }
          ]
        },
        {
          name: "Inpatient",
          data: [

            {
              x: 'Monday',
              y: 480,
              fillColor: '#1f4472'
            },
            {
              x: 'Tuesday',
              y: 493,
              fillColor: '#1f4472'
            },
            {
              x: 'Wednesday',
              y: 150,
              fillColor: '#1f4472'
            }, {
              x: 'Thursday',
              y: 523,
              fillColor: '#1f4472'
            }, {
              x: 'Friday',
              y: 150,
              fillColor: '#1f4472'
            }, {
              x: 'Saturday',
              y: 150,
              fillColor: '#1f4472'
            }, {
              x: 'Sunday',
              y: 100,
              fillColor: '#1f4472'
            }]
        }
      ],
      chart: {
        redrawOnParentResize:true,
        type: "bar",
        toolbar: { show: false },
        foreColor: '#657a8e',
        sparkline: {
          enabled: false
        },
        width: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "90%",
          distributed: true,
        }
      },
      legend: {
        position: 'top',
        show: true,
        fontFamily: 'bold',
        fontSize: '10',
        markers: {
          shape: 'circle',
        }
      },
      dataLabels: {
        distributed: true,
        enabled: true,
        textAnchor: 'middle',
        style: {
          fontFamily: 'bold',
          fontSize: '10'
        }
      },

      xaxis: {
        labels: {
          style: {
            fontFamily: 'bold',
            fontSize: '10'
          }
        },
        axisBorder: {
          show: false
        },
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        axisTicks: {
          show: false,
        }
      },
      yaxis: {

        labels: {
          style: {
            fontFamily: 'medium',
            fontSize: '10'
          }
        }
      },
      fill: {
        opacity: 1,
        colors: ['#0ea897', '#1f4472']
      },
      tooltip: {
        cssClass: 'text-neutral-600',

        style: {
          fontFamily: 'bold',
          fontSize: '3',

        },
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => ({
      id: index,
      id_code:new Date().getMilliseconds().toString(),
      created_date:new Date().toLocaleDateString(),
      name: `Edward King ${index}`,
      age: 32,
      address: '',
      type:index % 2 === 0 ? 'FUP+ECG' : 'FUP',
      action:'',
      disabled:false,
      time:new Date().toLocaleTimeString(),
      patient_status:index % 2 === 0 ? 'C' : 'P',
    }));
  }
}
