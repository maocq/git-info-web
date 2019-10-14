import { Component, OnInit } from '@angular/core';
import {Group} from '../../models/issuesStatus';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getGroups().subscribe((data: Group[]) => this.groups = data);
  }

}
