import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice';
import{ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  pid;

  selectedproductinfo;
  constructor(private productservice:ProductService,private route:ActivatedRoute) { }

  ngOnInit():void {

    //getting id from route
    this.route.paramMap.subscribe((params:ParamMap) =>{
     this.pid=parseInt(params.get('id'));
     console.log(this.pid);

   });
   
   
  this. callselectedProducts()


  }

  //calling the getProductinfo from productservice
callselectedProducts()
{                                                                         //http
  this.selectedproductinfo= this.productservice.getProductinfo(this.pid) //.subscribe(res=>{console.log(res)});
  console.log(this.selectedproductinfo)
}

}
