import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {ProjectFileLines} from '../../models/Group';
import {NameValue, SerieNameValue} from '../../models/model';

@Component({
  selector: 'app-hotspots-group',
  templateUrl: './hotspots-group.component.html',
  styleUrls: ['./hotspots-group.component.sass']
})
export class HotspotsGroupComponent implements OnInit {
  groupId: number;
  series: SerieNameValue[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.parent.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getFilesHotSpots(this.groupId);
      })).subscribe((files: ProjectFileLines[]) =>
        this.series = files.map(f => new SerieNameValue(f.project, f.lines.map(l => new NameValue(l.file, l.lines))))
    );
  }

}
