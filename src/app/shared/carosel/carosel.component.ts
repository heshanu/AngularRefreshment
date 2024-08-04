import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { RoomInterface } from '../interfaces/roomInterface';
import { PexelService } from '../../service/pexel.service';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  slides: RoomInterface[] = [];

  currentIndex: number = 0;
  interval: any;

  constructor(private pexelsService: PexelService ) { }

  ngOnInit(): void {
      //this.setPhotos();
      this.startAutoSlide();
      this.fetchPhotos('Sri Lanka');
      console.log(this.photos);   
  }

  photos: any[] = [];

  fetchPhotos(query: string) {
    this.pexelsService.searchPhotos(query).subscribe(
      (photos:any) => {
        this.photos = photos.photos;
      },
      error => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  getPrev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  getNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.getNext();
    }, 5000); 
  }

  stopAutoSlide(): void {
    clearInterval(this.interval);
  }
}
