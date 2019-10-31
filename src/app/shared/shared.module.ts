import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { FormErrorComponent } from './form-error/form-error.component';
import {MatSnackBarModule} from '@angular/material';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LoadingComponent,
    FormErrorComponent,
    MenuGroupComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    FormErrorComponent,
    MenuGroupComponent
  ]
})
export class SharedModule { }
