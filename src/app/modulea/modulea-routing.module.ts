import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleaComponent } from './modulea.component';

const routes: Routes = [
  
  { path: 'name/:id', component: ModuleaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleaRoutingModule { }

//create module for each compoent instead of app.module.ts
//single responsibility principle
//lazy loading
