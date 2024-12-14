import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'http://localhost:3000/api/billing'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  submitBillingInfo(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
