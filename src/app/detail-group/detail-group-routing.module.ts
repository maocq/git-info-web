import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpactGroupComponent} from './impact-group/impact-group.component';
import {IssuesGroupComponent} from './issues-group/issues-group.component';
import {AuthorsGroupComponent} from './authors-group/authors-group.component';
import {DetailGroupComponent} from './detail-group.component';
import {InfoGroupComponent} from './info-group/info-group.component';
import {HotspotsGroupComponent} from './hotspots-group/hotspots-group.component';
import {ActivityGroupComponent} from './activity-group/activity-group.component';
import {PrsGroupComponent} from './prs-group/prs-group.component';


const routes: Routes =
  [{
      path: ':id',
      component: DetailGroupComponent,
      children: [
        {path: '', component: InfoGroupComponent},
        {path: 'impact', component: ImpactGroupComponent},
        {path: 'issues', component: IssuesGroupComponent},
        {path: 'authors', component: AuthorsGroupComponent},
        {path: 'hotspots', component: HotspotsGroupComponent},
        {path: 'activity', component: ActivityGroupComponent},
        {path: 'relations-prs', component: PrsGroupComponent},
        {path: 'projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)},
      ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailGroupRoutingModule { }
