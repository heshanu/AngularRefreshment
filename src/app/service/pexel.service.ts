import { Injectable } from '@angular/core';
import { createClient } from 'pexels';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PexelService {

  private client;

  constructor() {
    this.client = createClient('9BjmTonkuZo6jlKHv3phLYvD3s23TXfzb94kL2QDZXc9wF1QfRAISX65');
    console.log();
    
  }

  searchPhotos(query: string, perPage: number = 1): Observable<any> {
    return from(this.client.photos.search({ query, per_page: perPage }));
  }
 
}
