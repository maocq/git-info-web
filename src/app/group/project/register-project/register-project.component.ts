import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/Group';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.sass']
})
export class RegisterProjectComponent implements OnInit {
  groupId: number;
  disabledButton = false;

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
    this.route.params.subscribe(params => this.groupId = +params.id);
  }

  onSubmit(request) {
    this.form.patchValue({groupId: this.groupId});
    this.disabledButton = true;

    this.projectService.registerProject(this.form.value)
      .subscribe((project: Project) => {
        this.form.reset();
        this.snackBar.open('Successful registration', 'OK', {duration: 2000});
        this.disabledButton = false;
      }, error => {
        console.log(error);
        this.snackBar.open('Error registration', 'OK', {duration: 2000});
        this.disabledButton = false;
      });
  }

  get id() {
    return this.form.get('id');
  }

}
