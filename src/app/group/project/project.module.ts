import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { RegisterProjectComponent } from './register-project/register-project.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [RegisterProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class ProjectModule { }
