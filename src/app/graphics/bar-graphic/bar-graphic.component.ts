import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {File} from '../../models/Group';

@Component({
  selector: 'app-bar-graphic',
  templateUrl: './bar-graphic.component.html',
  styleUrls: ['./bar-graphic.component.sass']
})
export class BarGraphicComponent implements OnInit {
  @Input() categories: string[];
  @Input() data: number[];

  public options: any = {
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    series: [{
      type: 'column',
      colorByPoint: true,
      data: [],
      showInLegend: false
    }]
  };

  constructor() { }

  ngOnInit() {
    this.options.xAxis.categories = this.categories;
    this.options.series[0].data = this.data;
    Highcharts.chart('container-bar', this.options);
  }

}
