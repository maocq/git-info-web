import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {DependencyWheelData} from '../../models/model';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-prs-group',
  templateUrl: './prs-group.component.html',
  styleUrls: ['./prs-group.component.sass']
})
export class PrsGroupComponent implements OnInit {
  groupId: number;
  data: DependencyWheelData[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.parent.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getRelationsPRs(this.groupId);
      }))
      .subscribe((data: DependencyWheelData[]) => this.data = data);
  }

}
