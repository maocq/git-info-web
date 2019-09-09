import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectsIssuesComponent } from './graphics/projects-issues/projects-issues.component';
import {ProjectService} from './services/project.service';
import { BasicLineComponent } from './graphics/basic-line/basic-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsIssuesComponent,
    BasicLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
