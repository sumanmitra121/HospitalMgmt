import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgButtonComponent } from 'NgButton';
import { ApiService } from '../../../service/api/api.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgTextFieldComponent } from 'NgTextField';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

interface RootObject {
  id: number;
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  address: Partial<Address> ;
  phone: string | undefined;
  website: string | undefined;
  company: Partial<Company> | null;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}

@Component({
  selector: 'app-dummy-list',
  standalone: true,
  imports: [
    NgButtonComponent,
    NzIconModule,
    NzCardModule,
    NzTableModule,
    NzModalModule,
    NzDropDownModule,
    ReactiveFormsModule,
    NgTextFieldComponent,
    NzGridModule,NzFormModule,
    NzPopconfirmModule,
    NzMessageModule
  ],
  templateUrl: './dummy-list.component.html',
  styleUrl: './dummy-list.component.less',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DummyListComponent implements OnInit{


  patientForm:FormGroup<{
    id:FormControl<number>;
    name:FormControl<string>;
    city:FormControl<string>;
    street:FormControl<string>;
    suite:FormControl<string>;
    email:FormControl<string>;
    username:FormControl<string>;
    phone: FormControl<string>;
  }> 

  constructor(private fb: NonNullableFormBuilder,private nzMessageService: NzMessageService) {
    this.patientForm = this.fb.group({
      id:[0,[Validators.required]],
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required]],
      phone:['',[Validators.required]],
      city:['',[Validators.required]],
      street:['',[Validators.required]],
      suite:['',[Validators.required]],
    });
  }


  dbIntr = inject(ApiService);

  md_patient:RootObject[] = [];

  isVisibleMiddle:boolean = false;


  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients = () =>{
      this.dbIntr.callApi(
        "https://jsonplaceholder.typicode.com/users",
        0,
        null
      ).subscribe((res:any) =>{
          this.md_patient = res;
      })
  }


  handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleRowEdit = (row:RootObject | undefined = undefined) =>{
      // console.log(row);
      this.isVisibleMiddle = true;
      this.patientForm.patchValue({
        city:row ? row.address.city : '',
        street:row ? row.address.street : '',
        suite:row ? row.address.suite : '',
        name:row ? row.name : '',
        phone:row ? row.phone : '',
        username:row ? row.username : '',
        email:row ? row.email : '',
        id:row ? row.id : 0
      })
  }
  changePatient = () =>{
    if (this.patientForm.valid) {
          if(this.patientForm.value.id == 0){
            this.md_patient.push({
              id:Number(new Date().getTime()),
              name: this.patientForm.value.name,
              email: this.patientForm.value.email,
              username: this.patientForm.value.username,
              phone: this.patientForm.value.phone,
              website:"xxx.com",
              company:null,
              address:{
                  city:this.patientForm.value.city,
                  street:this.patientForm.value.street,
                  suite:this.patientForm.value.suite,
              }
            })
          }
          else{
            this.md_patient = this.md_patient.filter(el =>{
                  if(el.id === this.patientForm.value.id){
                      el.name = this.patientForm.value.name;
                      el.email = this.patientForm.value.email;
                      el.username = this.patientForm.value.username;
                      el.phone = this.patientForm.value.phone;
                      el.address.street = this.patientForm.value.street;
                      el.address.suite = this.patientForm.value.suite;
                      el.address.city = this.patientForm.value.city;
                  }
                  return el;
              })
          }
          this.nzMessageService.info('Patient detail saved successfully!!');
          this.handleCancelMiddle();
      } else {
        Object.values(this.patientForm.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    
  }

  confirm = (row:RootObject) =>{
    this.md_patient = this.md_patient.filter(el =>{
          const isMatch = el.id == row.id;
          return !isMatch;
    })
    this.nzMessageService.info('Patient deleted successfully!!');
  }

  cancel = () =>{}

  handleOpenModal = () =>{
    this.handleRowEdit();
  }

}
