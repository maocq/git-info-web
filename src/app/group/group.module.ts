import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { DetailGroupComponent } from './detail-group/detail-group.component';
import {GraphicsModule} from '../graphics/graphics.module';


@NgModule({
  declarations: [
    GroupsComponent,
    DetailGroupComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    GraphicsModule
  ]
})
export class GroupModule { }
