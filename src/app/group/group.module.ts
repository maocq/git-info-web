import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GroupRoutingModule} from './group-routing.module';
import {GroupsComponent} from './groups/groups.component';
import {DetailGroupComponent} from './detail-group/detail-group.component';
import {GraphicsModule} from '../graphics/graphics.module';
import {SharedModule} from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {RegisterGroupComponent} from './register-group/register-group.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    GroupsComponent,
    DetailGroupComponent,
    RegisterGroupComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    GraphicsModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class GroupModule { }
