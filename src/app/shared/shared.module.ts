import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { FormErrorComponent } from './form-error/form-error.component';


@NgModule({
  declarations: [
    LoadingComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    FormErrorComponent
  ]
})
export class SharedModule { }
