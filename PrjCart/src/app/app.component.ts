import { Component, DoCheck } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'PrjCart';
  userChoice:string;
  loginsession:string;
  constructor(private cartservice:CartService)
  { 
    
  }
  

  ngDoCheck()
  {
    this.loginsession=this.cartservice.loginSessionvariable;
    console.log(this.loginsession);
  }
  
}
