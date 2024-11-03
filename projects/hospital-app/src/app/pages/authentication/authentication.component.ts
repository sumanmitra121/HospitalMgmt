import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ThemeService } from '../../service/theme/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [RouterOutlet,NzGridModule,NzTypographyModule,NzIconModule,CommonModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.less'
})
export class AuthenticationComponent {
    theme = inject(ThemeService)
}
