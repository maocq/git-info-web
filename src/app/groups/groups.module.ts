import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import {GroupsComponent} from './groups/groups.component';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {RegisterGroupComponent} from './register-group/register-group.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    GroupsComponent,
    RegisterGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class GroupsModule { }
