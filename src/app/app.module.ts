import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { EvenPipePipe } from './shared/pipe/even-pipe.pipe';
import { Usd2lkrsPipe } from './shared/pipe/usd2lkrs.pipe';
import { testInterceptor } from './test.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { AuthService } from './service/auth.service';
import { NewsService } from './service/news.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { RoomAddComponent } from './rooms/room-add/room-add.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    RoomsListComponent,
    ContainerComponent,
    EmployeeComponent,
    EvenPipePipe,
    Usd2lkrsPipe,
    AppNavComponent,
    NotFoundComponent,
    RoomsBookingComponent,
    RoomsBookingComponent,
    RoomAddComponent,
    LoginComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,MatSlideToggleModule,HttpClientModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,],
  
  providers: [EvenPipePipe, Usd2lkrsPipe,AuthService,NewsService,AuthGuard,
  
    {
      provide: testInterceptor,
      useValue: HTTP_INTERCEPTORS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
