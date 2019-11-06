import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpactGroupComponent} from './impact-group/impact-group.component';
import {IssuesGroupComponent} from './issues-group/issues-group.component';
import {AuthorsGroupComponent} from './authors-group/authors-group.component';
import {GroupComponent} from './group.component';
import {InfoGroupComponent} from './info-group/info-group.component';


const routes: Routes =
  [{
      path: '',
      component: GroupComponent,
      children: [
        {path: ':id', component: InfoGroupComponent},
        {path: ':id/impact', component: ImpactGroupComponent},
        {path: ':id/issues', component: IssuesGroupComponent},
        {path: ':id/authors', component: AuthorsGroupComponent},
        {path: ':id/projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)},
      ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
