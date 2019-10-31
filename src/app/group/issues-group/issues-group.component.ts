import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {InfoIssues} from '../../models/Group';

@Component({
  selector: 'app-issues-group',
  templateUrl: './issues-group.component.html',
  styleUrls: ['./issues-group.component.sass']
})
export class IssuesGroupComponent implements OnInit {
  groupId: number;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getIssuesGroup(this.groupId);
      }))
      .subscribe((infoIssues: InfoIssues) => {
          console.log(infoIssues);
      });
  }

}
