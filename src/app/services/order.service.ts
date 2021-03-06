import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private db:AngularFireDatabase,private shoppingCartService:ShoppingCartService) {
  }

 async placeOrder(order){
   let result= await this.db.list('/orders').push(order);
   this.shoppingCartService.clearCart();
   return result;   
   }

   getOrdersByOrderId(orderId){
    return this.db.object('/orders/'+ orderId);
   }

   getUserOrders(userId){
    return this.db.list('/orders',{
       query:{
         orderByChild:'userId',
         equalTo:userId
        }
     })     
   }


}
