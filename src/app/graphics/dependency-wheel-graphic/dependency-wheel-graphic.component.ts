import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import sankey from 'highcharts/modules/sankey';
import dependencyWheel from 'highcharts/modules/dependency-wheel';
import {DependencyWheelData} from '../../models/model';

sankey(Highcharts);
dependencyWheel(Highcharts);

@Component({
  selector: 'app-dependency-wheel-graphic',
  templateUrl: './dependency-wheel-graphic.component.html',
  styleUrls: ['./dependency-wheel-graphic.component.sass']
})
export class DependencyWheelGraphicComponent implements OnInit {
  @Input() data: DependencyWheelData[];

  public options: any = {
    title: {
      text: ''
    },
    series: [{
      keys: ['from', 'to', 'weight'],
      data: [
        ['Brazil', 'Portugal', 5],
        ['Brazil', 'France', 1],
        ['France', 'Spain', 1],
        ['France', 'England', 1]
      ],
      type: 'dependencywheel',
      name: 'Dependency wheel',
      dataLabels: {
        color: '#333',
        textPath: {
          enabled: true,
          attributes: {
            dy: 5
          }
        },
        distance: 10
      },
      size: '95%'
    }]

  };

  constructor() { }

  ngOnInit() {
    this.options.series[0].data = this.data;
    Highcharts.chart('container-dependency-wheel', this.options);
  }

}
