import { Component, OnInit,DoCheck } from '@angular/core';
import { element } from 'protractor';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck {
products:Product[];
grandTotal:number;
  constructor() { }

  ngOnInit() {
  }
ngDoCheck():void{
this.grandTotal=0;
this.products.forEach(element=>{
this.grandTotal+=element.price*element.quantity;
} );
}
}
