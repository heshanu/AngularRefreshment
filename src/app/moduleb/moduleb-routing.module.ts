import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulebComponent } from './moduleb.component';

const routes: Routes = [{ path: '', component: ModulebComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulebRoutingModule { }
