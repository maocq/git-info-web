import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {SerieNameValue} from '../../models/model';

@Component({
  selector: 'app-packedbubble-graphic',
  templateUrl: './packedbubble-graphic.component.html',
  styleUrls: ['./packedbubble-graphic.component.sass']
})
export class PackedbubbleGraphicComponent implements OnInit {
  @Input() series: SerieNameValue[];

  public options: any = {
    chart: {
      type: 'packedbubble',
      height: '100%'
    },
    title: {
      text: ''
    },
    tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
      packedbubble: {
        minSize: '20%',
        maxSize: '100%',

        layoutAlgorithm: {

          splitSeries: true,
          seriesInteraction: false,
          dragBetweenSeries: true,
          parentNodeLimit: false
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 250
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal'
          }
        }
      }
    },
    series: []
  };

  constructor() { }

  ngOnInit() {
    this.options.series = this.series;
    Highcharts.chart('container-packedbubble', this.options);
  }

}
