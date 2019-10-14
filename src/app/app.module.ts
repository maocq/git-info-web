import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectsIssuesComponent } from './graphics/projects-issues/projects-issues.component';
import {ProjectService} from './services/project.service';
import { BasicLineComponent } from './graphics/basic-line/basic-line.component';
import { ColumnsComponent } from './graphics/columns/columns.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {DataModule} from './data/data.module';
import {GraphicsModule} from './graphics/graphics.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsIssuesComponent,
    BasicLineComponent,
    ColumnsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataModule,
    GraphicsModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
