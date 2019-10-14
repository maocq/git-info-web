import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {DetailGroupComponent} from './detail-group/detail-group.component';


const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: ':id', component: DetailGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
