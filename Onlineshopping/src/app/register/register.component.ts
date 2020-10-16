import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customers:Customer;
  constructor() { }

  ngOnInit() {
    this.customers={firstname:"sri",cid:100,cname:"SAI",age:28,email:"sai@gmail.com"}
  }

}
