import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { RoomInterface } from '../../shared/interfaces/roomInterface';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit{

  constructor(private route: ActivatedRoute,private roomService:RoomService) { }
  ngOnInit(): void {
    console.log(this.id);
    this.getRoomDetails(this.id);
  }
  
  roomDetail!:RoomInterface;
  id: number = this.route.snapshot.params['id']; 
  
  public getRoomDetails(id:any){ 
    this.roomService.getRoomDetails(id)
    .subscribe((data:RoomInterface)=>{
      this.roomDetail=data;
    });  
  }
  
  bookRoom(id: number) {
    
  }
}