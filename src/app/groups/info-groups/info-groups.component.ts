import { Component, OnInit } from '@angular/core';
import {Group} from '../../models/model';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-info-groups',
  templateUrl: './info-groups.component.html',
  styleUrls: ['./info-groups.component.sass']
})
export class InfoGroupsComponent implements OnInit {
  groups: Group[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getGroups().subscribe((data: Group[]) => this.groups = data);
  }
}
