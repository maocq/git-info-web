import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/Group';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.sass']
})
export class RegisterProjectComponent implements OnInit {
  groupId: number;

  form = this.fb.group({
    id: ['', Validators.required],
    groupId: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params => this.groupId = +params.id);
  }

  onSubmit(request) {
    this.form.patchValue({groupId: this.groupId});

    this.projectService.registerProject(this.form.value)
      .subscribe((project: Project) => {
        this.form.reset();
        Swal.mixin({toast: true, position: 'top-end', showConfirmButton: false, timer: 5000}).fire({
          type: 'success',
          title: 'Successful update'
        });
      });
  }

  get id() {
    return this.form.get('id');
  }

}
