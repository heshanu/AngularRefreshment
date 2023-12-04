import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.id);
  }
  
  id: number = this.route.snapshot.params['id']; 
  
  
}