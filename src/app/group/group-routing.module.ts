import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {DetailGroupComponent} from './detail-group/detail-group.component';
import {RegisterGroupComponent} from './register-group/register-group.component';


const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: 'new', component: RegisterGroupComponent },
  { path: ':id', component: DetailGroupComponent },
  { path: ':id/projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
