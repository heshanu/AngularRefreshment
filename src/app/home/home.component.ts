import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

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
   
export class HomeComponent {
 
  newsData: newsDataInterface[] = [];

  constructor(private newsService: NewsService) { }
  
  name: String = "angular";
  itemImageUrl = '../assets/phone.svg';
  isShowing: boolean = false;
  
  role: String = 'fucker';

  selectHero: String = 'Windstorm';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  // getNews() { 
  //   this.newsService.getNews().subscribe((news: any) => {
  //     this.newsData = news.location;
  //     console.log(this.newsData);
  //   });
  // }
  
}
