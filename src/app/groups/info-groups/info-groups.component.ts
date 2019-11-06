import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import Swal from 'sweetalert2';
import {Group} from '../../models/Group';

@Component({
  selector: 'app-info-groups',
  templateUrl: './info-groups.component.html',
  styleUrls: ['./info-groups.component.sass']
})
export class InfoGroupsComponent implements OnInit {
  groups: Group[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getGroups().subscribe((data: Group[]) => this.groups = data);
  }

  delete(id: number) {
    Swal.fire({title: 'Are you sure?', type: 'warning', showCancelButton: true}).then((result) => {
      if (result.value) {
        this.projectService.deleteGroup(id).subscribe((g: Group) =>
          this.groups = this.groups.filter(e => e.id !== g.id)
        );
      }
    });
  }
}
