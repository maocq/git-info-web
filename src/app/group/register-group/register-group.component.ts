import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Group} from '../../models/model';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.sass']
})
export class RegisterGroupComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required]
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
        this.snackBar.open('Successful registration', '', {
          duration: 5000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: ['bg-success', 'text-white']
        });
      });
  }

  get name() {
    return this.form.get('name');
  }
}
