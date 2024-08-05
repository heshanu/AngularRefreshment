import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SelectedRooomShared } from './rooms-booking.component';
//import { MatDialogRef } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CurrentroomService } from '../../service/currentroom.service';
@Component({
  selector: 'dialog-animations-example',
  templateUrl:'./dialog-animations-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogAnimationsExample implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  
  constructor(private currentRoomDetails:CurrentroomService) { }

  
  seletecdRoom: any;
  removeNotification:boolean=true;
  ngOnInit(): void {
    this.seletecdRoom=this.currentRoomDetails.getRoomDetail();
    console.log(this.seletecdRoom);    
  };

  removeNotificationBar(){
    this.removeNotification=false;
  }
 
}
