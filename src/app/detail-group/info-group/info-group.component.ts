import {Component, OnDestroy, OnInit} from '@angular/core';
import {DetailGroup, InfoUpdated, Project} from '../../models/Group';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {DeleteProject} from '../../models/model';

@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styleUrls: ['./info-group.component.sass']
})
export class InfoGroupComponent implements OnInit, OnDestroy {
  groupId: number;
  group: DetailGroup;
  isUpdatind = false;
  interval;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.parent.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getGroup(this.groupId);
      }))
      .subscribe((group: DetailGroup) => {
        this.group = group;
        this.updating();
      });
  }

  update() {
    this.projectService.updateInfoGroup(this.groupId)
      .subscribe((info: InfoUpdated) => {
        if (info.updated) {
          this.projectService.getGroup(this.groupId).subscribe((group: DetailGroup) => this.group = group);
        }
      });
  }

  delete(id: number) {
    Swal.fire({title: 'Are you sure?', type: 'warning', showCancelButton: true}).then((result) => {
      if (result.value) {
        this.projectService.deleteProject(new DeleteProject(id, this.groupId))
          .pipe(switchMap((project: Project) => this.projectService.getGroup(this.groupId)))
          .subscribe((group: DetailGroup) => this.group = group);
      }
    });
  }

  updating() {
    this.isUpdatind = this.group.projects.some(p => p.updating);

    if (this.isUpdatind) {
      this.interval = setInterval(() => {
          this.projectService.updatingInfoGroup(this.groupId).subscribe(r => {
            if (this.isUpdatind !== r.updating) {
              this.isUpdatind = r.updating;
              clearInterval(this.interval);
              this.projectService.getGroup(this.groupId).subscribe((group: DetailGroup) => this.group = group);
            }
          });
      }, 2000);
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
