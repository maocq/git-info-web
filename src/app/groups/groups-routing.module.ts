import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {RegisterGroupComponent} from './register-group/register-group.component';


const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: 'new', component: RegisterGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
