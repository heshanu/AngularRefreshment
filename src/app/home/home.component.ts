import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/userInterface';

interface newsDataInterface {
  location?: string;
  name?: string;
region:String;
  country?: string;
  lat?: number;
  lon?: number;
  tz_id?: string;
  localtime_epoch?: number;
  localtime?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
   
export class HomeComponent implements OnInit {
 
  newsData: newsDataInterface[] = [];

  constructor() { }
  
  searchOptionsList:User[]=[
       {name:'Hikkaduwa'},{name:'Weligama'},{name:'Trinco'}
  ];

  ngOnInit(): void {
    
  }
 
}
