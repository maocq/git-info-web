import {Component, Input, OnInit} from '@angular/core';
import {File} from '../../models/Group';
import * as Highcharts from 'highcharts';

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
      name: 'Occurrences'
    }],
    title: {
      text: 'Wordcloud of Lorem Ipsum'
    }
  };

  constructor() { }

  ngOnInit() {
    this.options.series.data = this.files;
    //Highcharts.chart('container-cloud', this.options);
  }

}
