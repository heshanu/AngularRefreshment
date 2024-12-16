import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{
  @Input() Highcharts = Highcharts;
 // @Input() Highcharts = Highcharts; // required
  // @Input() chartOptions:any= {
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Line Chart Example'
  //   },
  //   series: [
  //     {
  //       name: 'Series A',
  //       data: [1, 2, 3, 4, 5]
  //     },
  //     {
  //       name: 'Series B',
  //       data: [5, 4, 3, 2, 1]
  //     }
  //   ]
  // };
  @Input() chartOptions:any;
  constructor() { }

  ngOnInit(): void {
  }

}
