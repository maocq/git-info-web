import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-projects-issues',
  templateUrl: './projects-issues.component.html',
  styleUrls: ['./projects-issues.component.sass']
})
export class ProjectsIssuesComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getPosts().subscribe((data) => {
      console.log(data);
    });
  }

}
