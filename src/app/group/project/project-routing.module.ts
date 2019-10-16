import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterProjectComponent} from './register-project/register-project.component';


const routes: Routes = [
  { path: '', component: RegisterProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
