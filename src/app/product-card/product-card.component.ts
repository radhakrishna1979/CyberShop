import { ShoppingCart } from './../models/shopping-cart';

import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {

  @Input('product') product:Product;
  @Input('show-actions') showActions =true;
  @Input('shopping-cart') shoppingCart:ShoppingCart;

  constructor(private cartService:ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  // removeFromCart(){
  //   this.cartService.removeFromCart(this.product);
  // }

  // getQuantity(){
  //   if(!this.shoppingCart) return 0;  

  //   // if (this.shoppingCart.itemsMap){
  //   //   let item = this.shoppingCart.itemsMap[this.product.$key];
  //   //   return item ? item.quantity:0;
  //   // } else {
  //   //     return 0;
  //   // }
  // }

}
