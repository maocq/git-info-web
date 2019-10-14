import {Component, Input, OnInit} from '@angular/core';
import {File} from '../../models/Group';
import * as Highcharts from 'highcharts';

let wordcloud = require('highcharts/modules/wordcloud');
wordcloud(Highcharts);

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.sass']
})
export class CloudComponent implements OnInit {
  @Input() files: File[];

  public options: any = {
    series: [{
      type: 'wordcloud',
      data: [],
      name: 'Files'
    }],
    title: {
      text: 'Files'
    }
  };

  constructor() { }

  ngOnInit() {
    this.options.series[0].data = this.files;
    Highcharts.chart('container-cloud', this.options);
  }

}
