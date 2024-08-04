import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { RoomInterface } from '../interfaces/roomInterface';
import { PexelService } from '../../service/pexel.service';
import { UnsplashService } from '../../service/unsplash.service';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  photos: any[] = [];
  currentIndex = 0;
  interval: any;

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    this.fetchPhotos('Luxury Hotels');
  
  }

  fetchPhotos(query: string) {
    this.unsplashService.searchPhotos(query).subscribe(
      response => {
        this.photos = response.response.results;
      },
      error => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  
}
