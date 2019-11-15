import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {InfoUser} from '../../models/Group';

@Component({
  selector: 'app-authors-group',
  templateUrl: './authors-group.component.html',
  styleUrls: ['./authors-group.component.sass']
})
export class AuthorsGroupComponent implements OnInit {
  groupId: number;
  users: InfoUser[];
  totalLines: number;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.parent.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getUsersGroup(this.groupId);
      }))
      .subscribe((users: InfoUser[]) => {
        this.users = users;
        this.totalLines = users.map(u => u.total).reduce((acc, current) => acc + current, 0);
      });
  }

}
