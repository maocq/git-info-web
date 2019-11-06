import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.sass']
})
export class DetailGroupComponent implements OnInit {
  groupId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupId = +params.id;
    });
  }
}
