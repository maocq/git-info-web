import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { RegisterProjectComponent } from './register-project/register-project.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [RegisterProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class ProjectModule { }
