import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Group} from '../../models/model';

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
