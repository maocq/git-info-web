import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';


const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', redirectTo: 'groups', pathMatch: 'full' },
  { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },
  { path: 'groups', loadChildren: () => import('./detail-group/detail-group.module').then(m => m.DetailGroupModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
