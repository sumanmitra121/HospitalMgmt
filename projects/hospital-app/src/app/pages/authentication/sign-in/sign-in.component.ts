import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgButtonComponent } from 'NgButton';
import { NgCheckBoxComponent } from 'NgCheckBox';
import { NgTextFieldComponent } from 'NgTextField';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ThemeService } from '../../../service/theme/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule,NgTextFieldComponent,NgCheckBoxComponent,NzFormModule,NgButtonComponent,NzLayoutModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.less'
})
export class SignInComponent {


  public theme  = inject(ThemeService);

  signInForm:FormGroup<{
    userName:FormControl<string>;
    password:FormControl<string>;
    remember: FormControl<boolean>;
  }> 

  constructor(private fb: NonNullableFormBuilder,private router:Router) {
    this.signInForm = this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
      remember:[true]
    })
    // console.log(theme)
    console.log(this.theme.currentTheme)
  }

  signIn() :void{
    if (this.signInForm.valid) {
      console.log('submit', this.signInForm.value);
      this.router.navigate(['/main'])
    } else {
      Object.values(this.signInForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
