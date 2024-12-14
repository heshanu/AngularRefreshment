import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  private API_URL:string="http://localhost:3001/rooms";

  constructor(private http: HttpClient) { }

  createRoom(room:any): Observable<any> {
    return this.http.post<any>(this.API_URL,room);
  }

}
