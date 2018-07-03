import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { AppUser } from '../models/app.user';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  shipping = <any>{}; 
  cart;
  subscription :Subscription;
  userSubscription:Subscription;
  user$;
  userId:string;  
  // appUser:AppUser;

  constructor(private shoppingCartService:ShoppingCartService, 
              private orderService:OrderService,
              private auth :AuthService,
              private router:Router ){        
              }

 async placeOrder() {  
    let order = {
      userId :this.userId,
      datePlaced : new Date().getTime(),
      shipping :this.shipping,      
      items:this.cart.items.map(i => {
            return {    
              product:{
                productTitle:i.title,
                imageUrl:i.imageUrl,
                price:i.price
              },
              quantity:i.quantity,
              totalPrice:i.totalPrice   
            }
      })
    }
   let result = await this.orderService.placeOrder(order); 
   console.log(result);
   this.router.navigate(['/order-success',result.key]);
  
  }    

  async ngOnInit(){ 
    // this.auth.appUser$.subscribe(appuser => {this.appUser=appuser;}); 
   let cart$= await this.shoppingCartService.getCart(); 
   this.subscription = cart$.subscribe(cart => {
     this.cart=cart; 
   }); 

   this.userSubscription=this.auth.user$.subscribe(user => this.userId=user.uid);
   }

  ngOnDestroy(){
   this.subscription.unsubscribe();
   this.userSubscription.unsubscribe();
  }

}
