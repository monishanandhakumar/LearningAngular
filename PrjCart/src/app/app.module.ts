import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { ReactiveformsloginComponent } from './reactiveformslogin/reactiveformslogin.component';
import{ReactiveFormsModule} from '@angular/forms';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    ReactiveformsloginComponent,
    AfterloginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
