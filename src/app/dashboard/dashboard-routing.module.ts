import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddFiltersComponent } from './add-filters/add-filters.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent,
  },
  {
    path:'add-filter',component:AddFiltersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
