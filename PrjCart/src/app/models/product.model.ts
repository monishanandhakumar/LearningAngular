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

}