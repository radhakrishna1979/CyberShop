import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from '../models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  private create(){
  return this.db.list('/shopping-carts').push({
    dateCreated : new Date().getTime()
  });
  }

  private getItem(cartId:string,productId:string){
    return this.db.object('/shopping-carts/'+ cartId + '/items/'+ productId);
  }

  async getCart():Promise<Observable<ShoppingCart>>{
     let cartId = await this.getCartId();
    return this.db.object('/shopping-carts/'+cartId)
    .map(x=> new ShoppingCart(x.items))
  }

  private async getCartId(){
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;
    let result = await this.create();
    localStorage.setItem("cartId",result.key);
    return result.key;
    }
    
  async addToCart(product:Product){
    this.updateItemQuantity(product,1);
  }

  async removeFromCart(product:Product,){
    this.updateItemQuantity(product,-1);    
  }

  async clearCart(){
    let cartId = await this.getCartId();
    this.db.object('/shopping-carts/'+cartId+'/items').remove();
  }

 private async updateItemQuantity(product:Product, change:number){
    let cartId= await this.getCartId();  
    let item$ = this.getItem(cartId,product.$key);
    item$.take(1).subscribe(item=>{
      let quantity = (item.quantity || 0) + change;
      if (quantity === 0) item$.remove();
      else
     item$.update({
      title:product.title,
      imageUrl:product.imageUrl,
      price:product.price,
      quantity:quantity    
  });
 })

 }
}
