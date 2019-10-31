import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);

@Component({
  selector: 'app-polar-graphic',
  templateUrl: './polar-graphic.component.html',
  styleUrls: ['./polar-graphic.component.sass']
})
export class PolarGraphicComponent implements OnInit {
  @Input() categories: string[];
  @Input() data: number[];

  public options: any = {
    chart: {
      polar: true
    },
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
      colorByPoint: false,
      data: [],
      showInLegend: false
    }]
  };

  constructor() { }

  ngOnInit() {
    this.options.xAxis.categories = this.categories;
    this.options.series[0].data = this.data;
    Highcharts.chart('container-polar', this.options);
  }

}
