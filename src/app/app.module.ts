import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { RoomsBookingComponent} from './rooms/rooms-booking/rooms-booking.component';
import { AuthService } from './service/auth.service';
import { NewsService } from './service/news.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { RoomAddComponent } from './rooms/room-add/room-add.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './materilModule';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { CaroselComponent } from './shared/carosel/carosel.component';
import { NgIconModule } from './ngIcons.module';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { TranslationModule } from './translation.module';
import { LanguageselectorComponent } from './shared/language/languageselector/languageselector.component';
import { FooterComponent } from './shared/footer/footer.component';
//import { PrimeModuleNgModule } from './primeNg.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './shared/auth/state/auth.reducer';
import { AuthEffects } from './shared/auth/state/auth.effects';
import { BillingService } from './service/billing.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './shared/chart/chart.component';

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
        SearchbarComponent,
        CaroselComponent,
        LanguageselectorComponent,
        FooterComponent,
        ChartComponent
          
    ],
    bootstrap: [AppComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, MatSlideToggleModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule,
    MatSidenavModule, MatIconModule,
    MatListModule, MaterialModule,
    // PrimeModuleNgModule,
    HighchartsChartModule,
    NgIconModule,
    PaginationComponent,
    TranslationModule,
    StoreModule.forRoot({ auth: reducer }),
    EffectsModule.forRoot([AuthEffects]), 
    ]
    ,
    providers: [EvenPipePipe, Usd2lkrsPipe, AuthService, NewsService, AuthGuard,
        BillingService,
        {
            provide: testInterceptor,
            useValue: HTTP_INTERCEPTORS,
            multi: true
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
