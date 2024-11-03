import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

enum Type{
  button='button',
  submit='submit',
  reset='reset'
}
export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text' | null
export type ButtonShape = 'circle' | 'round' | null;
export type ButtonSize = 'large' | 'default' | 'small';

@Component({
  selector: 'lib-NgButton',
  standalone: true,
  imports: [NzButtonModule,CommonModule],
  template: `
      <button 
        nz-button 
        [nzType]="NzType"
        [nzBlock]="nzBlock"
        type='{{buttonType}}'
        [nzShape]="shape"
        class="{{className}}"
        [nzSize]="buttonSize"
        [disabled]="disabled"
        [nzGhost]="nzGhost"
        (click)="buttonPress()"
        >
        <ng-container *ngIf="buttonName">
          {{buttonName}}
        </ng-container>
        <ng-content></ng-content>
        </button>
  `,
  styles: ``
})
export class NgButtonComponent {
  @Input({alias:'title'}) buttonName:string = '';

  @Input({alias:'type'}) buttonType:string | Type.button | Type.reset | Type.submit = Type.button;

  @Input({alias:'nzType'}) NzType: ButtonType = 'primary';

  @Input({alias:'fullWidth'}) nzBlock: boolean = false;

  @Input({alias:'shape'}) shape: ButtonShape = null;

  @Input({alias:'className'}) className:string = '';

  @Input({alias:'size'}) buttonSize: ButtonSize='default';

  @Input({alias:'isDiabled'}) disabled:boolean = false;

  @Input({alias:'isTransparent'}) nzGhost:boolean = false;

  @Output() onPress = new EventEmitter<Event>();


  buttonPress():void{
      this.onPress.emit()
  }
}
