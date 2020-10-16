import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LearningComponent } from './learning/learning.component';
import { RegisterComponent } from './register/register.component';
import { ProductclientComponent } from './productclient/productclient.component';
import { ProductService } from './services/productservice';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    LearningComponent,
    RegisterComponent,
    ProductclientComponent,
    PagenotfoundComponent,
    ProductinfoComponent,
    EditproductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
