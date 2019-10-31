import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-graphic',
  templateUrl: './line-graphic.component.html',
  styleUrls: ['./line-graphic.component.sass']
})
export class LineGraphicComponent implements OnInit {

  public options: any = {
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],
  }

    constructor() { }

  ngOnInit() {
    Highcharts.chart('container-line', this.options);
  }

}
