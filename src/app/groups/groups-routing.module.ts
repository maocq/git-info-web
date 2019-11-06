import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterGroupComponent} from './register-group/register-group.component';
import {InfoGroupsComponent} from './info-groups/info-groups.component';
import {GroupsComponent} from './groups.component';
import {EditGroupComponent} from './edit-group/edit-group.component';


const routes: Routes =
  [{
    path: '',
    component: GroupsComponent,
    children: [
      { path: '', component: InfoGroupsComponent },
      { path: 'new', component: RegisterGroupComponent },
      { path: ':id/edit', component: EditGroupComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
