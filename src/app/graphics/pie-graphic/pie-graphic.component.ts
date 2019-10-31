import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-graphic',
  templateUrl: './pie-graphic.component.html',
  styleUrls: ['./pie-graphic.component.sass']
})
export class PieGraphicComponent implements OnInit {

  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: '',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 61.41
        }, {
          name: 'Internet Explorer',
          y: 110.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
    }]
  }

  constructor() { }

  ngOnInit() {
    Highcharts.chart('container-pie', this.options);
  }

}
