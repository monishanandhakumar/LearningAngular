import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/productservice';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products;
  constructor(private productservice:ProductService) { }

  
  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct()
  {
    console.log("fetch product");
    this.productservice.getProducts().subscribe(
      (data)=>{this.products=data;})
      console.log("hi");
  }


}
