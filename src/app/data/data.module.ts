import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoGroupsComponent} from './info-groups/info-groups.component';



@NgModule({
  declarations: [
    InfoGroupsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    InfoGroupsComponent
  ]
})
export class DataModule { }
