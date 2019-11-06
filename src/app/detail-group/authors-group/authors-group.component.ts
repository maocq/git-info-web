import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {AuthorGroup, DetailGroup} from '../../models/Group';

@Component({
  selector: 'app-authors-group',
  templateUrl: './authors-group.component.html',
  styleUrls: ['./authors-group.component.sass']
})
export class AuthorsGroupComponent implements OnInit {
  groupId: number;
  authors: AuthorGroup[];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getAuthorsGroup(this.groupId);
      }))
      .subscribe((authors: AuthorGroup[]) => this.authors = authors.slice(0, 5));
  }

}
