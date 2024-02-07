import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreMoreRoutingModule } from './explore-more-routing.module';
import { ExploreMoreComponent } from './explore-more.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExploreMoreComponent
  ],
  imports: [
    CommonModule,
    ExploreMoreRoutingModule,
    FormsModule
  ]
})
export class ExploreMoreModule { }
