import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product.model';
import { ProductService } from '../services/productservice';
import{ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  pid;
  message
  constructor(private productservice:ProductService,private route:ActivatedRoute) { }
  editProductform:Product;
  ngOnInit() {
    //getting id from route
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.pid=parseInt(params.get('id'));
      console.log(this.pid);
 
    });
    //call the below method
     this.editProducts();

  }

  // calling Editproduct from service
  editProducts()
  {
   this.editProductform = this.productservice.editProduct(this.pid)
  }
//Passing value from editproducts to service editproduct
 /* updateProducts(pform:NgForm)
  {
    if( this.productservice.editProduct(pform.value))
    {
       this.message='Products Updated!!'
    }
    else{
      this.message='Error!!'
    }
  }*/

}
