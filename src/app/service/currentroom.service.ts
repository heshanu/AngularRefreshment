import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentroomService {

  constructor() { }
  private roomDetail: any;
  roomDetailChanged = new EventEmitter<any>();

  setRoomDetail(roomDetail: any) {
    this.roomDetail = roomDetail;
    this.roomDetailChanged.emit(this.roomDetail);
  }

  getRoomDetail() {
    return this.roomDetail;
  }
}
