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
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'dialog-animations-example',
  templateUrl:'./dialog-animations-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogAnimationsExample implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);

  notifications: string[] = [];

  constructor(private currentRoomDetails:CurrentroomService,
    private notificationService:NotificationService) { }
  
  seletectedRoom: any;
  showNotification: boolean = true;

  ngOnInit(): void {
    this.seletectedRoom=this.currentRoomDetails.getRoomDetail();
    console.log(this. seletectedRoom); 
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });   
  };

  removeNotification(index: number) {
    this.notificationService.removeNotification(index);
    this.showNotification=false;
  }

  onConfirm() {
    this.dialogRef.close('confirm');
  }
 
}
