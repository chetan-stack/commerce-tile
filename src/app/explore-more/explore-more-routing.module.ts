import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreMoreComponent } from './explore-more.component';

const routes: Routes = [
  {path:'',component:ExploreMoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreMoreRoutingModule { }
