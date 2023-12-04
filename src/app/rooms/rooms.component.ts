import { Component } from '@angular/core';
import { room } from '../shared/interface/room';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  roomsList: any[] = [
    {
      id: 1,
      name: 'Room 1',
      isOn: false,
      temperature: 20,
    },
    {
      id: 2,
      name: 'Room 2',
      isOn: false,
      temperature: 20,
    },
    {
      id: 3,
      name: 'Room 3',
      isOn: false,
      temperature: 20,
    }
  ];

  roomsPhotos: any[] = [];

  constructor(private newsService:NewsService) {}

  toggle():void {
    console.log('toggle');
  };
  
  getPhotos():void {
    this.newsService.getPhotos().subscribe((data:any) => {
      this.roomsPhotos = data;
      console.log(``, this.roomsPhotos);
    });
  }
}
