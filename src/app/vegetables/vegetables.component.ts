import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
 export class VegetablesComponent implements OnInit,OnDestroy {
  vegetableProducts;
  products=[];
  cart:any;
  subscription:Subscription;

  constructor(productService:ProductService, private shoppingCartService:ShoppingCartService) {   
    productService.getAll()
    .subscribe(products => {
      this.products=products
      this.vegetableProducts= this.products.filter(p=>p.category==="vegetables");
    });
    
}

  async ngOnInit() {
    this.subscription= (await this.shoppingCartService.getCart()).subscribe(cart => this.cart=cart)
    }
  
    ngOnDestroy(){
     this.subscription.unsubscribe();
    }

}
