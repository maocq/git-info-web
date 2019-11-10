import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {MatSnackBar} from '@angular/material';
import {Group} from '../../models/Group';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.sass']
})
export class RegisterGroupComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]]
  });

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(request) {

    this.projectService.registerGroup(request)
      .subscribe((group: Group) => {
        this.form.reset();
        this.router.navigateByUrl('/groups');
        /*
        Swal.mixin({toast: true, position: 'top-end', showConfirmButton: false, timer: 5000}).fire({
          type: 'success',
          title: 'Successful registration'
        });
         */
      });
  }

  get name() {
    return this.form.get('name');
  }
}
