import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AppUser } from '../models/app.user';
import { AuthService } from '../services/auth.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})

export class OrderSuccessComponent implements OnInit {

  d:Date;
  response;
  orderInfo;
  appUser:AppUser;
  orderId:string;
  orderInfo$:FirebaseObjectObservable<any>;
  constructor(private route:ActivatedRoute, 
              private OrderService:OrderService, 
              private emailService:EmailService,
              private auth :AuthService) { }

   
  ngOnInit() {
    this.orderId=  this.route.snapshot.paramMap.get('id');  
    this.orderInfo$= this.OrderService.getOrdersByOrderId(this.orderId);
      
    // this.orderInfo$.subscribe(x => {
    //    this.orderInfo =x; 
    //    this.d = new Date(this.orderInfo.datePlaced);             
    //    let orderDetails = {
    //       email:this.orderInfo.shipping.email,
    //       name:this.orderInfo.shipping.name,
    //       orderId: this.orderId,
    //       orderPlacedDate:this.d.toLocaleString(),
    //       shippingAddress:this.orderInfo.shipping.addressLine1 +'  '+ this.orderInfo.shipping.addressLine2,
    //       city:this.orderInfo.shipping.city,
    //       state:this.orderInfo.shipping.state,
    //       zipCode:this.orderInfo.shipping.zip
    //     }
    //   this.emailService.sendOrders(orderDetails)
    //   .subscribe(x=>this.response = x);
    // });
  }
}





