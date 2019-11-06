import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {switchMap} from 'rxjs/operators';
import {Group} from '../../models/Group';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.sass']
})
export class EditGroupComponent implements OnInit {
  groupId: number;
  group: Group;

  form = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => {
        this.groupId = +params.id;
        return this.projectService.getInfoGroup(this.groupId);
      }))
      .subscribe((group: Group) => this.group = group);
  }

  onSubmit(request) {
    this.form.patchValue({id: this.groupId});

    this.projectService.updateGroup(this.form.value)
      .subscribe((g: Group) => {
        this.group = g;
        Swal.mixin({toast: true, position: 'top-end', showConfirmButton: false, timer: 5000}).fire({
          type: 'success',
          title: 'Successful update'
        });
      });
  }

  get id() {
    return this.form.get('id');
  }

  get name() {
    return this.form.get('name');
  }

}
