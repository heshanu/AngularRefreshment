import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { room } from '../../shared/interface/room';
import { RoomInterface } from '../../shared/interfaces/roomInterface';
import { RoomService } from '../../service/room.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {


  roomsList: RoomInterface[] = [];

  constructor(private roomService: RoomService) { }
  errorMessage!: string;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.getRoomData();
  }

  private roomObserver: Observer<RoomInterface[]> = {
    next: (data: RoomInterface[]) => {
      this.roomsList = data;
      console.log('room data', this.roomsList);
    },
    error: (error: any) => {
      console.error('Error fetching room data:', error);
    },
    complete: () => {
      console.log('Room data fetching completed');
    }
  };

  public getRoomData(): void {
    this.isLoading = true;
    this.roomService.getPhotos().subscribe((data)=>{
      this.roomObserver.next(data);
      this.isLoading = false;
    },
    error => {
      console.error('Error fetching photos:', error);
      this.errorMessage = error;
    }
    );
  }

  selectRoom(room:RoomInterface): void {
    // this.roomSelected.emit(room);
    console.log(``, room);
  }
}

