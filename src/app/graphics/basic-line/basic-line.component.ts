import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ProjectService} from '../../services/project.service';
import {InfoIssue, IssuesStatus, LineSerie} from '../../models/issuesStatus';

@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.sass']
})
export class BasicLineComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Issues Projects'
    },
    subtitle: {
      text: 'Status'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b'
      },
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Number'
      },
      min: 0
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: - {point.y}'
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: true
        }
      }
    },
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    series: []
  };

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.projectService.getPosts().subscribe((data: IssuesStatus[]) => {
      console.log("Iniciando ...");
      const series: LineSerie[] = [];
      data.forEach((issue: IssuesStatus) => {
        const dataSerie: number[][] = [];
        issue.infoIssue.forEach((info: InfoIssue) => {
          dataSerie.push([Date.parse(info.date), info.count]);
        });
        series.push(new LineSerie(issue.status, dataSerie));
      });

      this.options.series = series;
      Highcharts.chart('containerb', this.options);
    });
  }

}
