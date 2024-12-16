import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { AuthState } from '../shared/auth/state/auth.state';
import { Store } from '@ngrx/store';
import {selectIsAuthenticated,selectUser,selectError} from '../shared/auth/state/auth.selector'
import * as AuthActions from "../shared/auth/state/auth.action";
import { StorageService } from '../storage.service';
import {SweetNotificationService} from '.././service/sweet-notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  public loginValid = true;
  public username:string = '';
  public password:string = '';

  public localStorageStoredUsername!:string|null;
  public localStorageStoredPassword!:string|null;

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  isAuthenticated$!: Observable<boolean>;
  user$!: Observable<any>;
  error$!: Observable<string | null>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private authService:AuthService,
    private store: Store<AuthState>,
    private localStorageService:StorageService,
    private sweetAlert: SweetNotificationService
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
    this.localStorageStoredUsername=this.getUserNameFromLocalStorage();
    this.localStorageStoredPassword=this.getUserPasswordFromLocalStorage();
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

  public saveToken(): void {
     this.localStorageService.setLocalStorageUserName(this.username);
     this.localStorageService.setLocalStoragePassword(this.password);
   }

  public onSubmit(): void {
    console.log("login onsubmit ");
    if (this.loginValid) {
      console.log("login onsubmit ");
      this.saveToken();
      this.sweetAlert.success('Success', 'Login Successfully');
      this._router.navigate(['/home']);
    } else {
      this.loginValid = false;
      this.sweetAlert.error('Error', 'This is an error message');
    }
  }

  public login(email: string, password: string): void {
    this.store.dispatch(AuthActions.login({ email, password }));
    this.onSubmit();
  }

  public logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
  
  public getUserNameFromLocalStorage():string|null{
    console.log(this.localStorageService.getLocalStorageUserName());
    return this.localStorageService.getLocalStorageUserName(); 
  }

  public getUserPasswordFromLocalStorage():string|null{
    console.log(this.localStorageService.getLocalStoragePassword());
    return this.localStorageService.getLocalStoragePassword();
  }
}

