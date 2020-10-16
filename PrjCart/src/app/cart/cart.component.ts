import { Component, OnInit,DoCheck } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck {
  products:Product[];
  grandTotal:number;
  constructor(private cartservice:CartService) { 
    this.products=this.cartservice.cart;
   // console.log(this.products.values)
  }

  ngOnInit() {
  }

  ngDoCheck():void{
    this.grandTotal=0;
    this.products.forEach(element=>{
    this.grandTotal+=element.price*element.quantity;
    } );
    }

    //calling RemoveItem service
    removeItem(prod:Product)
    {
      this.cartservice.removeItemfromCartservice(prod);
    }
}
