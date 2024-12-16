import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomInterface } from '../../shared/interfaces/roomInterface';
import { RoomService } from '../../service/room.service';
import {
  MatDialog} from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';
import { DialogAnimationsExample } from './dialog-animations-example.component';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';
import { CurrentroomService } from '../../service/currentroom.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private roomService: RoomService,
    private currentRoomService: CurrentroomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getRoomDetails(this.id);
   
  }

  //input for charts
  Highcharts=Highcharts;
  chartOptionsNumOfOrder= {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Room Reservation Num Of Orders '
    },
    series: [
      {
        name: '2023',
        data: [1, 2, 3, 4, 5]
      },
      {
        name: '2024',
        data: [50, 40, 30, 20, 10]
      }
    ]
  };

  chartOptionsExpense= {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Room Reservation Expenses'
    },
    series: [
      {
        name: '2023',
        data: [1, 2, 3, 4, 5]
      },
      {
        name: '2024',
        data: [50, 40, 30, 20, 10]
      }
    ]
  };

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExample, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  roomDetail!: RoomInterface;
  id!: number;

  public getRoomDetails(id: any) {
    this.roomService.getRoomDetails(id)
      .subscribe((data: RoomInterface) => {
        this.roomDetail = data;
        this.currentRoomService.setRoomDetail(this.roomDetail);
      });
  }

  bookRoom(id: number) {
    // Implement your booking logic here
  }
}

export class SelectedRooomShared {
  readonly sharedRoomDetail = inject(RoomsBookingComponent);
  static sharedRoomDetail: any;
  
}