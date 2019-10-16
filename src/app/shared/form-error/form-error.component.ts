import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.sass']
})
export class FormErrorComponent implements OnInit {
  @Input() control: AbstractControlDirective | AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
