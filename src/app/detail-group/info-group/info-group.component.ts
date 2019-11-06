import { Component, OnInit } from '@angular/core';
import {DetailGroup} from '../../models/Group';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styleUrls: ['./info-group.component.sass']
})
export class InfoGroupComponent implements OnInit {
  groupId: number;
  group: DetailGroup;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getGroup(this.groupId);
      }))
      .subscribe((group: DetailGroup) => this.group = group);
  }

}
