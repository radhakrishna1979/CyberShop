import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit,OnDestroy {
  // export class BabyComponent{
   babyProducts=[];
   cart:any;
   products=[];
   subscription:Subscription;

  constructor(productService:ProductService,private shoppingCartService:ShoppingCartService) {   
      
      productService.getAll()
        .subscribe(products => {
          this.products=products;
          this.babyProducts= this.products.filter(p=>p.category==="baby");
        });
   }

  async ngOnInit() {
  this.subscription= (await this.shoppingCartService.getCart())
  .subscribe(cart => {this.cart=cart;})
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
