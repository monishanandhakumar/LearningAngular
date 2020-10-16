
//2
import{HttpClient} from '@angular/common/http'
import{Injectable} from '@angular/core'
import { Product } from 'src/models/products.model'
//service is begin injected with something
//service is ready to take injection
@Injectable()
export class ProductService
{
    products:Product[];
    
    constructor(private http:HttpClient)
    {
        this.products=[];
    }

    //3 calling the Get Method
public getProducts()
{
    //calling get method
    return this.http.get("http://localhost:57748/api/Products");
}

//Adding Products to Products table
public postProducts(pro)
{
    return this.http.post("http://localhost:57748/api/Products",pro);

}
}