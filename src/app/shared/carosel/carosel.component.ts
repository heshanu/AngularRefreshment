import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../service/unsplash.service';
import { SearchbarComponentShared } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  photos: any[] = [];
  ph:number=0;
  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    this.fetchPhotos('Luxury Hotels');
    this.ph=SearchbarComponentShared.sharedSearchList().length;
  }

  fetchPhotos(query: string) {
    this.unsplashService.searchPhotos(query).subscribe(
      response => {
        this.photos = response.response.results;
      },
      error => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  
}
