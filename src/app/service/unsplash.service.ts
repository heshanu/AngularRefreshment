import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { createApi } from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private unsplash;

  constructor() {
    this.unsplash = createApi({
      accessKey: 'MKBag_smWNjRfuWukYN17wQFQbtMKGfENg5TLgv7jaE' 
    });
  }

  searchPhotos(query: string, perPage: number = 10): Observable<any> {
    return from(this.unsplash.search.getPhotos({ query, perPage }));
  }
}

