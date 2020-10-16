import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveformsloginComponent } from './reactiveformslogin/reactiveformslogin.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'productlist',component:ProductlistComponent
  },
  {
    path:'cart',component:CartComponent

  },
  {
    path:'login',component:ReactiveformsloginComponent
  },
  {
    path:'afterlogin',component:AfterloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
