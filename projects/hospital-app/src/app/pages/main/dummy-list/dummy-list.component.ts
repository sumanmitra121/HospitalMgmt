import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgButtonComponent } from 'NgButton';
import { ApiService } from '../../../service/api/api.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgTextFieldComponent } from 'NgTextField';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { FilterPipe } from '../../../globalPipes/filter.pipe';

interface RootObject {
  id: number;
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  address: Partial<Address>;
  phone: string | undefined;
  website: string | undefined;
  company: Partial<Company> | null;
  mergeAddress: string | null;
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
    NzGridModule, NzFormModule,
    NzPopconfirmModule,
    NzMessageModule,
    FilterPipe
  ],
  templateUrl: './dummy-list.component.html',
  styleUrl: './dummy-list.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DummyListComponent implements OnInit {
  searchTxt = new FormControl<string | number | null>('');
  listOfColumn = [
    {
      title: '#',
      compare: (a: RootObject, b: RootObject) => a.id - b.id,
    },
    {
      title: 'Patient',
      compare: (a: RootObject, b: RootObject) => a.name!.localeCompare(b.name!),
    },
    {
      title: 'Username',
      compare: (a: RootObject, b: RootObject) => a.username!.localeCompare(b.username!)
    },
    {
      title: 'Email',
      compare: (a: RootObject, b: RootObject) => a.email!.localeCompare(b.email!)
    },
    {
      title: 'Address',
      compare: (a: RootObject, b: RootObject) => a.mergeAddress!.localeCompare(b.mergeAddress!)
    }
  ];


  patientForm: FormGroup<{
    id: FormControl<number>;
    name: FormControl<string>;
    city: FormControl<string>;
    street: FormControl<string>;
    suite: FormControl<string>;
    email: FormControl<string>;
    username: FormControl<string>;
    phone: FormControl<string>;
  }>

  constructor(private fb: NonNullableFormBuilder, private nzMessageService: NzMessageService) {
    this.patientForm = this.fb.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      suite: ['', [Validators.required]],
    });
  }


  dbIntr = inject(ApiService);

  md_patient: RootObject[] = [];

  isVisibleMiddle: boolean = false;


  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients = () => {
    this.dbIntr.callApi(
      "https://jsonplaceholder.typicode.com/users",
      0,
      null
    ).subscribe((res: any) => {
      this.md_patient = res.map((el: RootObject) => {
        el.mergeAddress = `${el.address.street} ${el.address.suite} ${el.address.city}`;
        return el;
      });
    })
  }


  handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleRowEdit = (row: RootObject | undefined = undefined) => {
    // console.log(row);
    this.isVisibleMiddle = true;
    this.patientForm.patchValue({
      city: row ? row.address.city : '',
      street: row ? row.address.street : '',
      suite: row ? row.address.suite : '',
      name: row ? row.name : '',
      phone: row ? row.phone : '',
      username: row ? row.username : '',
      email: row ? row.email : '',
      id: row ? row.id : 0
    })
  }
  changePatient = () => {
    if (this.patientForm.valid) {
      if (this.patientForm.value.id == 0) {
        const highest = Math.max(...this.md_patient.map(el => el.id));
        this.md_patient = [
          ...this.md_patient,
          {
            id: highest + 1,
            name: this.patientForm.value.name,
            email: this.patientForm.value.email,
            username: this.patientForm.value.username,
            phone: this.patientForm.value.phone,
            website: "xxx.com",
            company: null,
            mergeAddress: `${this.patientForm.value.street} ${this.patientForm.value.suite} ${this.patientForm.value.city}`,
            address: {
              city: this.patientForm.value.city,
              street: this.patientForm.value.street,
              suite: this.patientForm.value.suite,
            }
          }
        ]
      }
      else {
        this.md_patient = this.md_patient.filter(el => {
          if (el.id === this.patientForm.value.id) {
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

  confirm = (row: RootObject) => {
    this.md_patient = this.md_patient.filter(el => {
      const isMatch = el.id == row.id;
      return !isMatch;
    })
    this.nzMessageService.info('Patient deleted successfully!!');
  }

  cancel = () => { }

  handleOpenModal = () => {
    this.handleRowEdit();
  }

}
