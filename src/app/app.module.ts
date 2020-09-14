import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { ConfectionaryComponent } from './components/confectionary/confectionary.component';
import { PastaComponent } from './components/pasta/pasta.component';
import { ReadytocookComponent } from './components/readytocook/readytocook.component';
import { SauceComponent } from './components/sauce/sauce.component';
import { SoupComponent } from './components/soup/soup.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BakeryComponent,
    ConfectionaryComponent,
    PastaComponent,
    ReadytocookComponent,
    SauceComponent,
    SoupComponent,
    SignupComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    /*RouterModule.forRoot([
      {path:'bakery', component:BakeryComponent}
  ])*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
