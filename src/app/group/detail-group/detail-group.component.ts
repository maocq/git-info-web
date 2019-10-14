import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {DetailGroup} from '../../models/Group';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.sass']
})
export class DetailGroupComponent implements OnInit {
  group: DetailGroup;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => this.projectService.getGroup(+params.id)))
      .subscribe((group: DetailGroup) => this.group = group);
  }

}
