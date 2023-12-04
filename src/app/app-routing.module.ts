import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'rooms',component:RoomsComponent,canActivate:[AuthGuard]
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'employee',component:EmployeeComponent,canActivate:[AuthGuard]
  },
  {
    path:'rooms/:id',component:RoomsBookingComponent,canActivate:[AuthGuard]
  },
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) },
  {
    path: '**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
