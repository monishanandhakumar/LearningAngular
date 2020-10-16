import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
@Injectable()
export class CartService
{
    products:Product[];
    cart:Product[];
    loginusername:string="";
    loginSessionvariable:string="invalid";
    
    constructor() {
      //Initialize cart to find the length else raise error when the cart is empty
      this.cart=[];
      this.products=[{
        id:1001,
        desc:'Pen',
        price:10,
        additionalinfo:'stationary',
        img:'assets/images/pen.jpg',
        quantity:10,
      },
      {
        id:1002,
        desc:'Doll',
        price:200,
        additionalinfo:'New Doll',
        img:'assets/images/doll.jpg',
        quantity:15,
      }
    ,
    {
      id:1003,
      desc:'Chocolate',
      price:100,
      additionalinfo:'New arrival - offer available',
      img:'assets/images/chocolate.jpg',
      quantity:100,
    }
    
    ,
    {
      id:1004,
      desc:'Biscuits',
      price:15,
      additionalinfo:'New arrival - offer available',
      img:'assets/images/biscuits.jpg',
      quantity:120,
    }
    ];
    
     }

//1
//fetching products array
     public getProductList()
     {
         return this.products;
     }
//2
     //getting product by id
     public getProductinfo(pid)
     {
         let additionaldetails;
       this.products.forEach(element => {
           if(element.id===pid)
           {
              additionaldetails=element
           }
             
         });
         console.log("i am inside productinfo",pid);
        
         return additionaldetails ;
     }

  //adding to cart
  public addToCartService(product:Product)
  {
    //If the product already exist in cart adding quantity alone
    let flag=0;
    for (let index = 0; index <this.cart.length; index++) {
        if(this.cart[index].id == product.id)
        {
           flag = 1;
           this.cart[index].quantity++;
           break;
        }  
    }
  
    //If Product not exist in cart add the product to cart
    if(flag ==0)
    this.cart.push(product);

    //to reduce the original quantity in products array
for (let index = 0; index <this.products.length; index++) {
    if(this.products[index].id == product.id)
    {
        this.products[index].quantity--;
    }  
}
  }   
//Removing Item from Cart
  removeItemfromCartservice(prod)
  {
    for(let i=0;i<this.cart.length;i++)
    {
      if(this.cart[i].id===prod.id)
      {
        if(prod.quantity>1)
        {
          this.cart[i].quantity--;
        }
        else if(prod.quantity==1)
        {
          this.cart.splice(i,1);
        }
      }
    }

    //incrementing quantity to the list
    for(let index=0;index<this.products.length;index++)
    {
      if(this.products[index].id==prod.id)
      {
        this.products[index].quantity++;
      }
    }

  }

  //TO get login Info

  loginStatus(uname)
  {
    if(uname!="")
    {

      this.loginusername=uname;
   this.loginSessionvariable="valid";
    }
    else
    {
      this.loginSessionvariable="invalid";
    }
    
  }
}