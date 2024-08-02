import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { User } from '../interfaces/userInterface';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit {
  
  @Input() searchLabelOptionList!:User[];

  myControl = new FormControl<string | User>('');

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
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[]|string[] {
    const filterValue = name.toLowerCase();
    return this.options.filter((option:any) => option.name.toLowerCase().includes(filterValue));
  }
}
