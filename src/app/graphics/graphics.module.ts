import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CloudComponent} from './cloud/cloud.component';



@NgModule({
  declarations: [
    CloudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloudComponent
  ]
})
export class GraphicsModule { }
