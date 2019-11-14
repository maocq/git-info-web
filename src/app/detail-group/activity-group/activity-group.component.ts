import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {ActivityGroup} from '../../models/Group';

@Component({
  selector: 'app-activity-group',
  templateUrl: './activity-group.component.html',
  styleUrls: ['./activity-group.component.sass']
})
export class ActivityGroupComponent implements OnInit {
  groupId: number;
  activityGroup: ActivityGroup;

  categoriesHours: string[];
  dataHours: number[];
  categoriesDays: string[];
  dataDays: number[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.parent.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getActivityGroup(this.groupId);
      }))
      .subscribe((activity: ActivityGroup) => {
        this.activityGroup = activity;
        this.categoriesHours = activity.hours.map(h => h.category);
        this.dataHours = activity.hours.map(h => h.value);

        this.categoriesDays = activity.daysOfWeak.map(h => h.category);
        this.dataDays = activity.daysOfWeak.map(h => h.value);
      });
  }

}
