import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Group} from '../../models/model';


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
    private projectService: ProjectService) { }

  ngOnInit() {
  }

  onSubmit(request) {

    this.disabledButton = true;

    this.projectService.registreGroup(request)
      .subscribe((group: Group) => {
          this.form.reset();
          this.disabledButton = false;
      });
  }

}
