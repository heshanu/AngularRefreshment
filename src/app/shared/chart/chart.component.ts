import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{
  @Input() Highcharts = Highcharts;
  @Input() chartOptions:any;
  constructor() { }

  ngOnInit(): void {
  }

}
