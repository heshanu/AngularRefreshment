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
@Component({
  selector: 'dialog-animations-example',
  templateUrl:'./dialog-animations-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogAnimationsExample implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  
  seletecdRoom: any;

  ngOnInit(): void {
    this.seletecdRoom=SelectedRooomShared.sharedRoomDetail();
    console.log(this.seletecdRoom);    
  };
 
}
