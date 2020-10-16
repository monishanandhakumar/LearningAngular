import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:Product[];
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

  ngOnInit() {
  }

  
}
