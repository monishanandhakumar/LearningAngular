import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { LearningComponent } from './learning/learning.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductclientComponent } from './productclient/productclient.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  //default route
  { path:'', redirectTo: 'learning', pathMatch: 'full' },

  {
    path:'learning',component:LearningComponent,
  }
  ,
  {
    path:'productclient',component:ProductclientComponent,
  },
  {
    path:'productlist',component:ProductlistComponent,
  },
  {
    path:'register',component:RegisterComponent,
  },
  //router with parameter
  {
    path:'productinfo/:id',component:ProductinfoComponent
  },
  {
    path:'editproduct/:id',component:EditproductComponent
  },
  {
    path:'cart',component:CartComponent
  },
  //page not found
  {
    path:'**',component:PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
