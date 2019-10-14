import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ProjectService} from '../../services/project.service';
import {DataC, User} from '../../models/model';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.sass']
})
export class ColumnsComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Issues for user'
    },
    subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent market share'
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [

        ]
      }
    ]
  };

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.projectService.getUsers().subscribe((data: User[]) => {
      const series: DataC[] = [];
      data.forEach((user: User) => {
        series.push(new DataC(user.user, user.count));
      });
      this.options.series[0].data = series;
      Highcharts.chart('container', this.options);
    });
  }

}
