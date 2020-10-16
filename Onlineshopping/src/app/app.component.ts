import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onlineshopping';

  /*id:number=1001;
  desc:string="Pen";
  price:number=5;
  img:any='assets/images/pen.jpg';*/

  /*products:Product[]=[{
    id:1001,
    desc:'Pen',
    price:10,
    img:'assets/images/pen.jpg'
  },
  {
    id:1002,
    desc:'Doll',
    price:200,
    img:'assets/images/lady.png'
  }
,
{
  id:1003,
  desc:'Chocolate',
  price:100,
  img:'assets/images/lady.png'
}

,
{
  id:1004,
  desc:'Biscuits',
  price:15,
  img:'assets/images/lady.png'
}
]*/
}
