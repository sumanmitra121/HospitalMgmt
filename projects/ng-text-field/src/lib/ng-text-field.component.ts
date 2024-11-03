import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';


export type TextFieldSize = 'large' | 'small' | 'default';


enum TextFieldType {
  password = "password",
  text = 'text',
  email = 'email',
  number = 'number',
}

@Component({
  selector: 'lib-NgTextField',
  standalone: true,
  imports: [NzInputModule,CommonModule,ReactiveFormsModule,NzFormModule,NzIconModule],
  template: `
      <nz-form-item class="{{className}}"
        >
          <nz-form-label *ngIf="label" [nzSpan]="24" [nzFor]="inputId" [nzRequired]="required">{{label}}</nz-form-label>
            <nz-form-control [nzErrorTip]="'*Please enter your ' + inputId + ' !!'">
            <nz-input-group [nzCompact]="true" autocomplete="off"
             [nzSuffix]="suffixIcon"
             [nzSize]="ngTextSize"  [ngClass]="{
            className:className
        }">
                      <input autocomplete="off" 
                      [nzBorderless]="borderLess"
                      [type]="type !='password' ? type : passwordVisible ? 'text' : 'password'" autocomplete="off" 
                      [attr.id]="inputId"
                      [attr.name]="inputName"
                      [formControl]="control"
                      nz-input placeholder="{{placeholder}}"/>
              </nz-input-group>
                <ng-template #suffixIcon>
                  <span nz-icon nzType="{{type == 'text' ? suffix_icon : (!passwordVisible ? suffix_icon : 'eye-invisible')}}" (click)="passwordVisibility()"></span>
                </ng-template>
           </nz-form-control>
      </nz-form-item>
  `,
  styles: ``
})
export class NgTextFieldComponent {
  @Input({ alias: 'size' }) ngTextSize: TextFieldSize = 'large';

  @Input({ alias: 'prefixIcon' }) pref_icon: string | TemplateRef<void> = '';

  @Input({ alias: 'suffixIcon' }) suffix_icon: string | TemplateRef<void> = '';

  @Input({ alias: 'placeholder' }) placeholder: string = '';

  @Input({alias:'isBorderLess'}) borderLess:boolean = false;

  @Input({ alias: 'label' }) label: string = '';

  @Input({ alias: 'type' }) type: string = TextFieldType.text;

  @Input({alias:'className'}) className:string = '';

  @Input({alias:'controlName'}) control:FormControl = new FormControl;

  @Input({alias:'inputId'}) inputId: string = '';

  @Input({alias:'inputName'}) inputName: string = '';

  @Input({alias:'isRequired'}) required: boolean = false;


  passwordVisible:boolean = false;


  passwordVisibility(){
    if(this.type == TextFieldType.password)
      this.passwordVisible = !this.passwordVisible;
    console.log(this.passwordVisible)
  }
}
