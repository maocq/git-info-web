import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { FormErrorComponent } from './form-error/form-error.component';
import {MatSnackBarModule} from '@angular/material';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    LoadingComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    LoadingComponent,
    FormErrorComponent
  ]
})
export class SharedModule { }
