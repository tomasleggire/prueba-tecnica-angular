import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

import { MatIconModule } from '@angular/material/icon';
import { ProductsPageHeaderComponent } from './components/products-page-header/products-page-header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsPageHeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
