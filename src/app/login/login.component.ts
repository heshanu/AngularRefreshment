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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuard } from '../shared/auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  //public loginValid!:boolean;
  loginForm!:FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false
  
  // public email:string = '';
  // public password:string = '';

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
    private sweetAlert: SweetNotificationService,
    private fb: FormBuilder
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
      this.initForm();
    }

  initForm(): void {
      this.loginForm= this.fb.group(
        {
         email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.minLength(8),Validators.required]],
          }  
        )};

    get f() {
      return this.loginForm.controls;
    }

   public get email() {
      return this.loginForm.get('email');
    }
  
    get password() {
      return this.loginForm.get('password');
    }


  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  // public saveToken(): void {
  //    this.localStorageService.setLocalStorageUserName(this.username);
  //    this.localStorageService.setLocalStoragePassword(this.password);
  //  }

  public onSubmit(): void {
    console.log("exe 2 ");
    console.log("login onsubmit ");
    if (this.email?.value=="h@gmail.com" && this.password?.value=="admin123456789") {
      console.log("login onsubmit ");
      this.login(this.email?.value,this.password?.value);
     // this.saveToken();
     this.sweetAlert.confirm('Login Successfully?','')
     .then((result) => {
       if (result.isConfirmed) {
         this.sweetAlert.success('LoggedIn', 'You log as:'+this.email?.value);
       }
     });

      this._router.navigate(['/home']);
    } else {
      this.sweetAlert.error('Error', 'Unable to Login');
    }
    setInterval(() => {
     this.clear();
    }, 1000);
  }

  public login(email: string, password: string): void {
    this.store.dispatch(AuthActions.login({ email,password }));
    console.log(this.authService.isAuthenticated);;
    this.submitted = true;
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

  clear():void{
    this.email?.value=="";
    this.password?.value=="";
  }
}

