import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit,OnDestroy {

  electronicsProducts;
  products=[];
  cart:any;
  subscription:Subscription;
  
 constructor(productService:ProductService, private shoppingCartService:ShoppingCartService) {   
      productService.getAll()
      .subscribe(products => this.products=products);
      this.electronicsProducts= this.products.filter(p=>p.dept==="Electronics");
  }

  async ngOnInit() {
    this.subscription= (await this.shoppingCartService.getCart()).subscribe(cart => this.cart=cart)
    }
  
    ngOnDestroy(){
     this.subscription.unsubscribe();
    }


}
