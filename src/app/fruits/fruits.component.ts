import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  // export class FruitsComponent{
  fruitProducts;
  products=[];
  cart:any;
  subscription:Subscription;
  
 constructor(productService:ProductService, private shoppingCartService:ShoppingCartService) {   
      productService.getAll()
      .subscribe(products => {
        this.products=products
        this.fruitProducts= this.products.filter(p=>p.category==="fruits");
      });
  }

  async ngOnInit() {
    this.subscription= (await this.shoppingCartService.getCart())
    .subscribe(cart => this.cart=cart)
    }
  
    ngOnDestroy(){
     this.subscription.unsubscribe();
    }


}
