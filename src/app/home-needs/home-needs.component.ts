import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-home-needs',
  templateUrl: './home-needs.component.html',
  styleUrls: ['./home-needs.component.css']
})

export class HomeNeedsComponent implements OnInit ,OnDestroy{
// export class HomeNeedsComponent{
  homeProducts;
  products=[];
  cart:any;
  subscription:Subscription;
  
 constructor(productService:ProductService, private shoppingCartService:ShoppingCartService) {   
      productService.getAll()
      .subscribe(products => {
        this.products=products
        this.homeProducts= this.products.filter(p=>p.category==="home");
      });
      
  }

  async ngOnInit() {
    this.subscription= (await this.shoppingCartService.getCart()).subscribe(cart => this.cart=cart)
    }
  
    ngOnDestroy(){
     this.subscription.unsubscribe();
    }

}
