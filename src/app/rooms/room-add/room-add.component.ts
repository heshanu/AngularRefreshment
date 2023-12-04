import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { room } from '../../shared/interface/room';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrl: './room-add.component.css'
})
export class RoomAddComponent implements OnInit{
  constructor(private ref: ElementRef) { }
  @ViewChild('f') form: any;
  b: boolean = false;
  roomModel: room = {}; 
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) {
      alert('please enter valid data!');
      return;
    }
    //pass the form object to backend via the service
    alert('success');
    console.log(this.form.controls);
    
    //reset form value after hit the submit button
    this.form.reset();
  }
}
