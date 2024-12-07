import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Root {
  id: number
  moduleName: string
  modulDescriptions: string
  url: string
  Icon: string
  routeName: string
  image: string
}

@Component({
  selector: 'ng-module-comp',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ng-module-comp.component.html',
  styleUrl: './ng-module-comp.component.less'
})
export class NgModuleCompComponent implements OnInit{

    @Input({alias:'item'}) moduleItem: Partial<Root> | null = null;
 
  ngOnInit(): void {
    console.log(this.moduleItem)

  }
}
