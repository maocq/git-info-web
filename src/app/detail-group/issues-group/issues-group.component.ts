import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {InfoIssues} from '../../models/Group';
import {DataC, LineSerie} from '../../models/model';

@Component({
  selector: 'app-issues-group',
  templateUrl: './issues-group.component.html',
  styleUrls: ['./issues-group.component.sass']
})
export class IssuesGroupComponent implements OnInit {
  groupId: number;
  dataUsers: DataC[];
  dataIssues: LineSerie[];

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
        const dataIssues = infoIssues.issuesClosed.map(c => [Date.parse(c.category), c.value]);
        this.dataIssues = [new LineSerie('Issues', dataIssues)];
        this.dataUsers = infoIssues.users.map(c => new DataC(c.category, c.value));
      });
  }

}
