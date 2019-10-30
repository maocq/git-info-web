import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {ImpactGroup} from '../../models/Group';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-impact-group',
  templateUrl: './impact-group.component.html',
  styleUrls: ['./impact-group.component.sass']
})
export class ImpactGroupComponent implements OnInit {
  groupId: number;
  impact: ImpactGroup[];
  categories: string[];
  data: number[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getImpactGroup(this.groupId);
      }))
      .subscribe((impact: ImpactGroup[]) => {
        this.impact = impact;
        this.categories = impact.map(im => im.mounth);
        this.data = impact.map(im => im.count);
      });
  }
}
