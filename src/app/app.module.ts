import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './includes/header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CollectionComponent } from './collection/collection.component';
import { ExportComponent } from './export/export.component';
import { TecnologyComponent } from './tecnology/tecnology.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { FooterComponent } from './includes/header/footer/footer.component';
import { FooterWhiteComponent } from './includes/footer-white/footer-white.component';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    CollectionComponent,
    ExportComponent,
    TecnologyComponent,
    AddToCardComponent,
    FooterComponent,
    FooterWhiteComponent,
    CatalogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
