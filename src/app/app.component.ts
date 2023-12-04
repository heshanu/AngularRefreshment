import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  constructor(private newsService:NewsService) { }
  //acces to the element with the #name
  //@ViewChild('name', { static: true }) name!: ElementRef;
  //title = 'App2';

  ngOnInit(): void {
    //this.name.nativeElement.value = 'Hello World';
  }
}
