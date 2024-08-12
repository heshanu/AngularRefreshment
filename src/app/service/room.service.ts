import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomInterface } from '../shared/interfaces/roomInterface';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<RoomInterface[]> {
    return this.http.get<RoomInterface[]>(`${this.baseUrl}?_limit=10`);
  }

  public getRoomDetails(id: number): Observable<RoomInterface> {
    console.log();
    
    return this.http.get<RoomInterface>(`${this.baseUrl}/${id}`);
  }
}
