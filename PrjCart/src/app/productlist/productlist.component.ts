import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:Product[];
  //DI
  constructor(private cartservice:CartService,private userRouter:Router) { }
 

  ngOnInit() {

    //calling below method
   this.getproductListFromService()
  }

  //1
  //calling getproductlist from cart service
getproductListFromService()
{
 this.products= this.cartservice.getProductList();
}


//equal to buy method
addToCart(pid)
{

  if(this.cartservice.loginusername!="")
  {
  //2
  //fetching the product info for the particular pid
  let product:Product
 product  = this.cartservice.getProductinfo(pid);
  console.log("add to cart:",product)

  let myProduct = new Product();
  myProduct.id = product.id;
  myProduct.desc = product.desc;
  myProduct.price = product.price;
  myProduct.img = product.img;
  myProduct.quantity = 1;
  
  this.cartservice.addToCartService(myProduct)
   }

    else
    {
       this.userRouter.navigate(['login']);
     }
}

}