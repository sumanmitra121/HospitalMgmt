import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


export type AvatarType = 'circle' | 'square';

@Component({
  selector: 'lib-NgAvatar',
  standalone: true,
  imports: [NzAvatarModule,CommonModule],
  template: `
     <nz-avatar 
     [nzIcon]="ngIcon" 
     [nzAlt]="ngAlt"
     [nzText]="ngText"
     [nzSize]="ngSize"
     [nzShape]="ngShape"
     [ngStyle]="{ 
     'background': backgroundColor
     }"
     [nzSrc]="ngSrc"></nz-avatar>
  `,
  styles: ``
})
export class NgAvatarComponent {

  @Input({ alias: 'background-color' }) backgroundColor: string | undefined = '';

  @Input({ alias: 'txt-color' }) color: string | undefined = '#fff';


  @Input({ alias: 'icon' }) ngIcon: string | undefined = '';

  @Input({ alias: 'shape' }) ngShape: AvatarType = 'circle';

  @Input({ alias: 'size' }) ngSize: 'large' | 'small' | 'default' | number = 'large';

  @Input({ alias: 'gap' }) ngGap: number | undefined = 6;

  @Input({ alias: 'src' }) ngSrc: string | undefined = '';

  @Input({ alias: 'srcSet' }) ngSrcSet: string | undefined = '';

  @Input({ alias: 'alt' }) ngAlt: string | undefined = '';

  @Input({ alias: 'text' }) ngText: string | undefined = '';

  @Output() errorLoadingAvatar: EventEmitter<Event> = new EventEmitter<Event>()

}
