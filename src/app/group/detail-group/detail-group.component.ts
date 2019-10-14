import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.sass']
})
export class DetailGroupComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => this.projectService.getGroup(+params.id)))
      .subscribe(console.log);
  }

}
