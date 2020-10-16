import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-productclient',
  templateUrl: './productclient.component.html',
  styleUrls: ['./productclient.component.css']
})
export class ProductclientComponent implements OnInit {

  
  products:Product[];
  createProduct:Product;
  message;
    //1
  //creating variable without using dependency injection
 // productservice;

 //DI
  constructor(private productservice:ProductService) {
    //1
    //without using dependency injection --singleton pattern is not achived
   // this.productservice=new ProductService();

   //adding product 
   this.createProduct=new Product();
   }

  ngOnInit() {
  }

  //getting Product Information from service
  getProducts()
  {
    //1
    //calling method in service without using dependency injection 
    //this.products=this.productservice.getProducts();
    //2 DI
    this.products=this.productservice.getProducts();
  }

//Adding Products details to array in service - Calling addProduct method from Service

addProducts()
{
  console.log("inside productclient add Products");
  if( this.productservice.addProduct(this.createProduct))
  {

   this.message='Product Added!!!';

  }
  else{
    this.message='Product Not Added!! ProductId Exists or Some other Error please check !!!';

  }
 
}
//
deleteProducts(id)
{
  console.log('client:'+id);
  if(this.productservice.deleteProduct(id))
  {
    this.message='Product Deleted!!'
  }
  else{
    this.message='Product not deleted!!'
  }
}

/*
//Edit

editProducts(pid)
{
  this.createProduct= this.productservice.editProduct(pid)
}
updateProducts(pform:NgForm)
{
  //to print all the value
  console.log(pform.value);
  //to print particular value
  console.log(pform.value.id);
  if(this.productservice.updateProduct(pform))
  {
    this.message='Records updated!!!'
  }
  else
  {
    this.message='Error!!'

  }
}*/

}
