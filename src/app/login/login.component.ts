import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { AuthState } from '../shared/auth/state/auth.state';
import { Store } from '@ngrx/store';
import {selectIsAuthenticated,selectUser,selectError} from '../shared/auth/state/auth.selector'
import * as AuthActions from "../shared/auth/state/auth.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  public loginValid = true;
  public username = '';
  public password = '';

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  isAuthenticated$!: Observable<boolean>;
  user$!: Observable<any>;
  error$!: Observable<string | null>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private authService:AuthService,
    private store: Store<AuthState>
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
    this.isAuthenticated$ = this.authService.isAuthenticated();
    this.user$ = this.store.select(selectUser);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('Is Authenticated:', isAuthenticated);
    });

    this.user$.subscribe(user => {
      console.log('User:', user);
    });

    this.error$.subscribe(error => {
      console.log('Error:', error);
    });
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginValid = true;
    if (this.username === 'h@gmail.com' && this.password === 'admin123456789') {
      this._router.navigate(['/home']);
      this.saveToken();
    } else {
      this.loginValid = false;
    }
  }

  public saveToken(): void {
    localStorage.setItem('username',this.username);
    localStorage.setItem('password',this.password);
  }

  public login(email: string, password: string): void {
    this.store.dispatch(AuthActions.login({ email, password }));
  }

  public logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
  
}
