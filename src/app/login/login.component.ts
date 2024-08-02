import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Subject, take, takeUntil } from 'rxjs';

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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginValid = true;
    if (this.username === 'h@gmail.com' && this.password === 'admin') {
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
}
