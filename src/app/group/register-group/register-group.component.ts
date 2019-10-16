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
  disabledButton = false;

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
    this.disabledButton = true;

    this.projectService.registreGroup(request)
      .subscribe((group: Group) => {
        this.form.reset();
        this.snackBar.open('Successful registration', 'OK', {duration: 2000});
        this.disabledButton = false;
      }, error => {
        console.log(error);
        this.snackBar.open('Error registration', 'OK', {duration: 2000});
      });
  }

}
