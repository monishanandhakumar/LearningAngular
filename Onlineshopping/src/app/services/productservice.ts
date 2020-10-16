import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable()
export class ProductService
{
    
    products:Product[];
    cart:Product[];
    constructor() {
      this.products=[{
        id:1001,
        desc:'Pen',
        price:10,
        additionalinfo:'stationary',
        img:'assets/images/pen.jpg'
      },
      {
        id:1002,
        desc:'Doll',
        price:200,
        additionalinfo:'New Doll',
        img:'assets/images/lady.png'
      }
    ,
    {
      id:1003,
      desc:'Chocolate',
      price:100,
      additionalinfo:'New arrival - offer available',
      img:'assets/images/lady.png'
    }
    
    ,
    {
      id:1004,
      desc:'Biscuits',
      price:15,
      additionalinfo:'New arrival - offer available',
      img:'assets/images/lady.png'
    }
    ]
     }

      //adding additional info details 

        
    public getProducts()
    {
        /*let products:Product[];
                                    //adding additional info details 

        products=[
            new Product(1,'Pen',20,'Stationary','assets/images/pen.jpg'),
            new Product(2,'Doll',100,'Toys','assets/images/lady.png'),
            new Product(3,'ManDoll',150,'New Arrival - offer till 28-sep-2020','assets/images/man.png'),
        ]*/
        return this.products;
    }
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


    //Adding new Products
    addProduct(product:Product){
        console.log("inside service add Products");
        for (let index = 0; index < this.products.length; index++) {
            if(this.products[index].id == product.id)
            {
                return false;
            }  
        }
        this.products.push(product);
        return true;
    }

    //Deleting Product

    deleteProduct(productid)
    {
        console.log("inside service delete Products:"+productid);

        //index
   /*    for (let index = 0; index < this.products.length; index++) {
            if(this.products[index].id==this.products[productindex].id)  //when particular product id not exist
            {
                console.log('service id:'+this.products[productindex].id);
                this.products.splice(productindex,1);   //when particular product id  exist
                return true;
            }  
        }
        return false;*/
        //index to be passed for splice not productid
       
      /*  console.log('service'+productindex);
        this.products.splice(productindex,1); 
        return true;*/
//Passing Id
        for (let index = 0; index < this.products.length; index++) {
            console.log("inside service for ");
            if(this.products[index].id==productid)  //when particular product id not exist
            {
                console.log('service id:'+this.products[index].id);
                this.products.splice(index,1);   //when particular product id  exist
                return true;
            }  
        }
        return false;


    }


    //Edit
    editProduct(id)
    {
        let editdetails;
        this.products.forEach(element => {
            if(element.id===id)
            {
                editdetails=element;
            }
              
          });
          console.log("i am inside productinfo",id);
         
          return editdetails ;
         
    }


    updateProduct(productform:NgForm)
    {
        
        this.products.forEach(element => {
            if(element.id===productform.value.id)
            {
                console.log('inside update service if')
                this.products.push(productform.value);
                return true;
            }
            
          });
          console.log("I am before return true in service");
        // return false;
     
    }
    //Adding to Cart

    addToCart(product:Product){
        let flag=0;
        //adding to cart
        for (let index = 0; index < this.cart.length; index++) {
            if(this.cart[index].id == product.id)
            {
               flag = 1;
               this.cart[index].quantity++;
               break;
            }  
        }
        //subtracting from quantity  in products array
        if(flag ==0)
            this.cart.push(product);
        for (let index = 0; index < this.products.length; index++) {
            if(this.products[index].id == product.id)
            {
                this.products[index].quantity--;
            }  
        }
    }
}