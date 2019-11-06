import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {RegisterGroupComponent} from './register-group/register-group.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { InfoGroupsComponent } from './info-groups/info-groups.component';
import { GroupsComponent } from './groups.component';
import { EditGroupComponent } from './edit-group/edit-group.component';



@NgModule({
  declarations: [
    RegisterGroupComponent,
    InfoGroupsComponent,
    GroupsComponent,
    EditGroupComponent
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
