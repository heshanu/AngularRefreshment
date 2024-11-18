import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('CanActivate called');

    return this.authService
    .isAuthenticated()
    .pipe(
      take(1), // Take only the first emitted value
      map(isAuthenticated => {
        if (isAuthenticated) {
          console.log('User is authenticated:', isAuthenticated);
          return true;
        } else {
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
