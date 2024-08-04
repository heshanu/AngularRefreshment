import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { RoomInterface } from '../interfaces/roomInterface';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  slides: RoomInterface[] = [];

  currentIndex: number = 0;
  interval: any;

  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
      this.setPhotos();
      this.startAutoSlide();
  }

  setPhotos(){
    this.roomService.getPhotos().subscribe((data:any)=>{
      this.slides = data;
    });
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
    }, 1000); 
  }

  stopAutoSlide(): void {
    clearInterval(this.interval);
  }
}
