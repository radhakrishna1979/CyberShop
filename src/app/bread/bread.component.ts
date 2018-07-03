import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Product } from '../models/product';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit,OnDestroy {
  // export class BreadComponent{
  breadProducts;
  products=[];
  cart:any;
  subscription:Subscription;
  
 constructor(productService:ProductService,private shoppingCartService:ShoppingCartService) {   
      productService
      .getAll()
      .subscribe(products => {
        this.products=products
      this.breadProducts= this.products.filter(p=>p.category==="bread");
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
