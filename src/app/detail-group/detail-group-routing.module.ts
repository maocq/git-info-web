import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpactGroupComponent} from './impact-group/impact-group.component';
import {IssuesGroupComponent} from './issues-group/issues-group.component';
import {AuthorsGroupComponent} from './authors-group/authors-group.component';
import {DetailGroupComponent} from './detail-group.component';
import {InfoGroupComponent} from './info-group/info-group.component';
import {HotspotsGroupComponent} from './hotspots-group/hotspots-group.component';


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
        {path: 'projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)},
      ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailGroupRoutingModule { }
