import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { room } from '../../shared/interface/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {

  @Input() roomsList: room[] = [];
  // @Output() roomSelected = new EventEmitter<any>();

  selectRoom(room: room) {
    // this.roomSelected.emit(room);
    console.log(``, room);
  }
}
