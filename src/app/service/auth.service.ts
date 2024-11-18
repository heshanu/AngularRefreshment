// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../shared/auth/state/auth.state';
import * as AuthSelector from '../shared/auth/state/auth.selector';
import * as AuthActions from '../shared/auth/state/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient, private store: Store<AuthState>) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
    .pipe(
      map(response => {
        this.store.dispatch(AuthActions.loginSuccess({ user: response.user }));
        console.log(response.user);
        return response.user;
      }),
      catchError(error => {
        console.error('Login error:', error);
        this.store.dispatch(AuthActions.loginFailure({ error: 'Login failed' }));
        return of(null);
      })
    );
  }

  logout(): Observable<any> {
    this.store.dispatch(AuthActions.logout());
    return of(null).pipe(
      catchError(error => {
        console.error('Logout error:', error);
        this.store.dispatch(AuthActions.logoutFailure({ error: 'Logout failed' }));
        return of(null);
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    console.log(select(AuthSelector.selectIsAuthenticated));
   return this.store.pipe(select(AuthSelector.selectIsAuthenticated));
  }
}
