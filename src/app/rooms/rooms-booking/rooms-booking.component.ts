import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomInterface } from '../../shared/interfaces/roomInterface';
import { RoomService } from '../../service/room.service';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';
import { DialogAnimationsExample } from './dialog-animations-example.component';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getRoomDetails(this.id);
  }

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
      });
  }

  bookRoom(id: number) {
    // Implement your booking logic here
  }
}

export class SelectedRooomShared {
  static roomDetail: any;

  static sharedRoomDetail() {
    return this.roomDetail;
  }

  constructor(private searchbarComponent:RoomsBookingComponent) {}

  get sharedSearchList(): any {
    return this.searchbarComponent.roomDetail;
  }
}