import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DetailGroupRoutingModule} from './detail-group-routing.module';
import {GraphicsModule} from '../graphics/graphics.module';
import {SharedModule} from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule, MatCardModule, MatListModule} from '@angular/material';
import {ImpactGroupComponent} from './impact-group/impact-group.component';
import { IssuesGroupComponent } from './issues-group/issues-group.component';
import { AuthorsGroupComponent } from './authors-group/authors-group.component';
import { DetailGroupComponent } from './detail-group.component';
import { InfoGroupComponent } from './info-group/info-group.component';


@NgModule({
  declarations: [
    ImpactGroupComponent,
    IssuesGroupComponent,
    AuthorsGroupComponent,
    DetailGroupComponent,
    InfoGroupComponent
  ],
  imports: [
    CommonModule,
    DetailGroupRoutingModule,
    GraphicsModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule
  ]
})
export class DetailGroupModule { }
