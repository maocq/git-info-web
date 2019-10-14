import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupsComponent } from './groups/groups.component';
import {DataModule} from '../data/data.module';


@NgModule({
  declarations: [GroupsComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    DataModule
  ]
})
export class GroupModule { }
