import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreMoreComponent } from './explore-more.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:ExploreMoreComponent},
  {path:'product-details',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreMoreRoutingModule { }
