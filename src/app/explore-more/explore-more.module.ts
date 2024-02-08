import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreMoreRoutingModule } from './explore-more-routing.module';
import { ExploreMoreComponent } from './explore-more.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ExploreMoreComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ExploreMoreRoutingModule,
    FormsModule
  ]
})
export class ExploreMoreModule { }
