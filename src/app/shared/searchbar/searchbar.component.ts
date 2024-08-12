import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { User } from '../interfaces/userInterface';
import { UnsplashService } from '../../service/unsplash.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit {
  
  @Input() searchLabelOptionList!:any[];
  searchList:any[]=[];
  static roomDetail: any;

  constructor(private unPleshService:UnsplashService){}
  myControl = new FormControl<string | User|any>('');

  filteredOptions!: Observable<User[]|any[]>;
  options:User[]=[];

  ngOnInit() {
    this.options=this.searchLabelOptionList;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    this.fetchPhotos('Luxury Hotels');
    
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[]|string[] {
    const filterValue = name.toLowerCase();
    return this.options.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log('Form value:', this.myControl.value+" "+"hotels");
    this.fetchPhotos(this.myControl.value+" "+"hotels");
    //localStorage.setItem('locationSearched',this.searchList);
  }

  fetchPhotos(query: string) {
    this.unPleshService.searchPhotos(query).subscribe(
      response => {
        this.searchList= response.response.results;
      },
      error => {
        console.error('Error fetching photos:', error);
      }
    )};
}

export class SearchbarComponentShared {

  static sharedSearchList() {
    return this.sharedSearchList;
  }

  constructor(private searchbarComponent: SearchbarComponent) {}

  get sharedSearchList(): any[] {
    return this.searchbarComponent.searchList;
  }
}