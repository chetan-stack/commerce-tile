import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { ExportComponent } from './export/export.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'explore', loadChildren: () => import('./explore-more/explore-more.module').then(m => m.ExploreMoreModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  // { path: 'export', loadChildren: () => import('./export/').then(m => m.ContactUsModule) },
  {path:'cart',component:AddToCardComponent},
  {path:'export',component:ExportComponent},
  {path:'collection',component:CollectionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
