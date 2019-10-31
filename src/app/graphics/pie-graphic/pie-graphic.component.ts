import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataC} from '../../models/model';

@Component({
  selector: 'app-pie-graphic',
  templateUrl: './pie-graphic.component.html',
  styleUrls: ['./pie-graphic.component.sass']
})
export class PieGraphicComponent implements OnInit {
  @Input() data: DataC[];

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
      data: []
    }]
  }

  constructor() { }

  ngOnInit() {
    this.options.series[0].data = this.data;
    Highcharts.chart('container-pie', this.options);
  }

}
