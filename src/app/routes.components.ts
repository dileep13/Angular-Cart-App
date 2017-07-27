import {Component} from "@angular/core";
import {ProductService} from "./services/product.service";
import {Product} from "./models/product.model";

@Component({
  template:`<h3>Welcome To Shopping Cart</h3>`
})
export class HomeComponent{

}

@Component({
  template:`<div class="col-sm-6">
            <product-list></product-list>
          </div>
          <div class="col-sm-6 well">
            <cart-items></cart-items>
          </div>`
})
export class ListComponent{

}

@Component({
  templateUrl:'./manage.component.html'
})
export class ManageProductComponent{

  productList:Product[] = [];
  formProduct : Product = new Product("","",null,"");

  constructor(private productService:ProductService)
  {
    productService.getProductData().subscribe(data=>{
      this.productList = data.json();
    },error =>{
      console.log(error.toLocaleString());
    });
  }
  addProduct(newProduct:Product)
  {
    this.productService.addProduct(newProduct).subscribe(data=>{
      console.log(data);
      this.formProduct = new Product("","",null,"");
    },error =>{
      console.log(error.toLocaleString());
    });
  }

  removeProduct(productId:number)
  {
    this.productService.deleteProduct(productId).subscribe(data=>{
      console.log(data);
      this.formProduct = new Product("","",null,"");
    },error =>{
      console.log(error.toLocaleString());
    });
  }
}

@Component({
  template:`<h1>404 Error</h1>`
})
export class NotFoundComponent{

}
