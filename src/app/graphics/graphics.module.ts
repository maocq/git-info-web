import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CloudComponent} from './cloud/cloud.component';
import {BasicLineComponent} from './basic-line/basic-line.component';
import {ColumnsComponent} from './columns/columns.component';
import {ProjectsIssuesComponent} from './projects-issues/projects-issues.component';
import { BarGraphicComponent } from './bar-graphic/bar-graphic.component';
import { PolarGraphicComponent } from './polar-graphic/polar-graphic.component';



@NgModule({
  declarations: [
    CloudComponent,
    BasicLineComponent,
    ColumnsComponent,
    ProjectsIssuesComponent,
    BarGraphicComponent,
    PolarGraphicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloudComponent,
    BasicLineComponent,
    ColumnsComponent,
    ProjectsIssuesComponent,
    BarGraphicComponent,
    PolarGraphicComponent
  ]
})
export class GraphicsModule { }
