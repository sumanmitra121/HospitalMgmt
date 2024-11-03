import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'lib-NgCheckBox',
  standalone: true,
  imports: [NzCheckboxModule,CommonModule,ReactiveFormsModule,NzFormModule],
  template: `
          <label nz-checkbox [formControl]="control">
            <span>{{Label}}</span>
          </label>
  `,
  styles: ``
})
export class NgCheckBoxComponent {
  @Input({alias:'controlName'}) control:FormControl = new FormControl;
  @Input({alias:'label'}) Label:string  = '';
}
