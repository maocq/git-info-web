import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  form = this.fb.group({
    id: ['', Validators.required],
    groupId: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit() {
    this.route.parent.parent.params.subscribe(params => this.groupId = +params.id);
  }

  onSubmit(request) {
    this.form.patchValue({groupId: this.groupId});

    this.projectService.registerProject(this.form.value)
      .subscribe((project: Project) => {
        this.form.reset();
        this.router.navigate(['/groups', this.groupId]);
      });
  }

  get id() {
    return this.form.get('id');
  }

}
