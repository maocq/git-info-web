import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {LineSerie} from '../../models/model';

@Component({
  selector: 'app-line-graphic',
  templateUrl: './line-graphic.component.html',
  styleUrls: ['./line-graphic.component.sass']
})
export class LineGraphicComponent implements OnInit {
  @Input() series: LineSerie[];

  public options: any = {
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime'
    },
    series: [],
  };

    constructor() { }

  ngOnInit() {
    this.options.series = this.series;
    Highcharts.chart('container-line', this.options);
  }

}
