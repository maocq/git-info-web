import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Group} from '../../models/model';
import {MatSnackBar} from '@angular/material';
import Swal from 'sweetalert2';

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
    private projectService: ProjectService) { }

  ngOnInit() {
  }

  onSubmit(request) {

    this.projectService.registerGroup(request)
      .subscribe((group: Group) => {
        this.form.reset();
        Swal.mixin({toast: true, position: 'top-end', showConfirmButton: false, timer: 5000}).fire({
          type: 'success',
          title: 'Successful registration'
        });
        /*this.snackBar.open('Successful registration', 'OK', {
          duration: 5000, verticalPosition: 'top', horizontalPosition: 'right'
        });*/
      });
  }

  get name() {
    return this.form.get('name');
  }
}