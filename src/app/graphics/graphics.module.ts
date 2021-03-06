import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CloudComponent} from './cloud/cloud.component';
import {BasicLineComponent} from './basic-line/basic-line.component';
import {ColumnsComponent} from './columns/columns.component';
import {ProjectsIssuesComponent} from './projects-issues/projects-issues.component';
import { BarGraphicComponent } from './bar-graphic/bar-graphic.component';
import { PolarGraphicComponent } from './polar-graphic/polar-graphic.component';
import { PieGraphicComponent } from './pie-graphic/pie-graphic.component';
import { LineGraphicComponent } from './line-graphic/line-graphic.component';
import { PackedbubbleGraphicComponent } from './packedbubble-graphic/packedbubble-graphic.component';
import { DependencyWheelGraphicComponent } from './dependency-wheel-graphic/dependency-wheel-graphic.component';



@NgModule({
  declarations: [
    CloudComponent,
    BasicLineComponent,
    ColumnsComponent,
    ProjectsIssuesComponent,
    BarGraphicComponent,
    PolarGraphicComponent,
    PieGraphicComponent,
    LineGraphicComponent,
    PackedbubbleGraphicComponent,
    DependencyWheelGraphicComponent
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
    PolarGraphicComponent,
    PieGraphicComponent,
    LineGraphicComponent,
    PackedbubbleGraphicComponent,
    DependencyWheelGraphicComponent
  ]
})
export class GraphicsModule { }
