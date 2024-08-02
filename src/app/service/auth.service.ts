import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, map, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  constructor() { }
  isAuthenticated() {
    return this.isLoggedIn;
  }

}
