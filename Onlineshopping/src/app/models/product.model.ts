export class Product
{
    id:number;
    desc:string;
    price:number;
    img:any;
    //add additionalinfo for route parameter
    additionalinfo:string;
    //Add quantity for cart
    quantity?:number;
    //Adding constructor for Service
/*
    constructor(id:number,desc:string,price:number,additionalinfo:string,img?:any)
    {
this.id=id;
this.desc=desc;
this.price=price;
this.additionalinfo=additionalinfo;
this.img=img;
    }*/
}