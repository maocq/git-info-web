import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.sass']
})
export class MenuGroupComponent implements OnInit {
  @Input() groupId: number;

  constructor() { }

  ngOnInit() {
  }

}
