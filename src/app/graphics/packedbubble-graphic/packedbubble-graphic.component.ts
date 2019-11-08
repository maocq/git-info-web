import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-packedbubble-graphic',
  templateUrl: './packedbubble-graphic.component.html',
  styleUrls: ['./packedbubble-graphic.component.sass']
})
export class PackedbubbleGraphicComponent implements OnInit {

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
      pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
    },
    plotOptions: {
      packedbubble: {
        minSize: '20%',
        maxSize: '100%',
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          gravitationalConstant: 0.05,
          splitSeries: true,
          seriesInteraction: false,
          dragBetweenSeries: true,
          parentNodeLimit: true
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
    series: [{
      name: 'Europe',
      data: [{
          name: 'Germany',
          value: 767.1
        },
        {
          name: 'Croatia',
          value: 20.7
        },
        {
          name: "Belgium",
          value: 97.2
        },
        {
          name: "Czech Republic",
          value: 111.7
        }]
    }]
  };

  constructor() { }

  ngOnInit() {
    Highcharts.chart('container-packedbubble', this.options);
  }

}
