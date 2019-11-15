import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {ProjectWeightAuthors} from '../../models/Group';
import {DataC, ExpertProject} from '../../models/model';

@Component({
  selector: 'app-weights-group',
  templateUrl: './weights-group.component.html',
  styleUrls: ['./weights-group.component.sass']
})
export class WeightsGroupComponent implements OnInit {
  groupId: number;
  data: ProjectWeightAuthors[];
  dataProjects: DataC[];
  expertsProjects: ExpertProject[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.parent.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getProjectsWeight(this.groupId);
      }))
      .subscribe((data: ProjectWeightAuthors[]) => {
        this.data = data;
        this.dataProjects = data.map(d => new DataC(d.project, d.number));
        this.expertsProjects = data.map(d => new ExpertProject(d.authors[0].author, d.project, d.authors[0].percentage));
      });
  }

}
