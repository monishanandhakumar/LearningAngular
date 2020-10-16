import { Component, OnInit } from '@angular/core';
//import{FormBuilder,Validators,AbstractControl} from '@angular/forms'
import{FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-reactiveformslogin',
  templateUrl: './reactiveformslogin.component.html',
  styleUrls: ['./reactiveformslogin.component.css']
})
export class ReactiveformsloginComponent implements OnInit {

  cus:Customer;
  loginForm:FormGroup;
  err:string;
  constructor(/*private fb:FormBuilder*/private userRouter:Router,private cartservice:CartService ) { 
    this.loginForm=new FormGroup({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null)
    });

  }
  //this.emai.value invoke get email method wich fetche email from from
  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get("password");
  }
  doLogin(){
    console.log("inside login");

    if( this.email.value=="123" && this.password.value=="123")
    {
    // this.userRouter.navigate(['userhome']);
     this.err="welcome"
     this.cartservice.loginStatus(this.email.value);
      this.userRouter.navigate(['afterlogin']);
    }
   else
   {
     this.err="Invalid username or password";
    }
 //  this.loginForm.reset(this.loginForm.value);  
  /*  if(this.loginForm.valid)
    {
       if( this.password.value=="123")
        // this.userRouter.navigate(['userhome']);
         this.err="welcome"
       else
         this.err="Invalid username or password"
    }*/
  }

  ngOnInit() {
  
    
  }
  
  /*
  loginForm=this.fb.group({
    email:[''],
    password:['']
  });
*/
  
}
