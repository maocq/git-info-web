import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import {GroupsComponent} from './groups/groups.component';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';



@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class GroupsModule { }
