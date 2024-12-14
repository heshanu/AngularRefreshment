// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) => {
        if (email === 'h@gmail.com' && password === 'admin123456789') {
          return of(AuthActions.loginSuccess({ user: {email,password } }));
        } else {
          return of(AuthActions.loginFailure({ error: 'Login failed' }));
        }
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        console.log("logout clicked");
        this.router.navigate(['']); // Navigate to the desired route
      }),
      mergeMap(() => of(AuthActions.logoutSuccess()))
    )
  );

  constructor(
    private actions$: Actions,
    private router:Router
  ) {}
}
