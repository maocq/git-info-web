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
import {MatBadgeModule, MatCardModule, MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {ImpactGroupComponent} from './impact-group/impact-group.component';
import { IssuesGroupComponent } from './issues-group/issues-group.component';
import { AuthorsGroupComponent } from './authors-group/authors-group.component';
import { DetailGroupComponent } from './detail-group.component';
import { InfoGroupComponent } from './info-group/info-group.component';
import { HotspotsGroupComponent } from './hotspots-group/hotspots-group.component';
import { ActivityGroupComponent } from './activity-group/activity-group.component';
import { PrsGroupComponent } from './prs-group/prs-group.component';
import { WeightsGroupComponent } from './weights-group/weights-group.component';


@NgModule({
  declarations: [
    ImpactGroupComponent,
    IssuesGroupComponent,
    AuthorsGroupComponent,
    DetailGroupComponent,
    InfoGroupComponent,
    HotspotsGroupComponent,
    ActivityGroupComponent,
    PrsGroupComponent,
    WeightsGroupComponent
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
    MatBadgeModule,
    MatProgressSpinnerModule
  ]
})
export class DetailGroupModule { }
