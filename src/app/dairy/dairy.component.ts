import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css']
})

export class DairyComponent implements OnInit,OnDestroy {
  // export class DairyComponent{
  dairyProducts;
  products=[];
  cart:any;
  subscription:Subscription;
 constructor(productService:ProductService,
             private shoppingCartService:ShoppingCartService) {   
      productService.getAll()
      .subscribe(products => {this.products=products
        this.dairyProducts= this.products.filter(p=>p.category==="dairy");
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
