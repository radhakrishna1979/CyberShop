import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  userId;
  orders$;
  orders;

  constructor(private orderService:OrderService,private auth:AuthService) { }

  ngOnInit() {
   this.orders$ = this.auth.user$.switchMap(u => this.orderService.getUserOrders(u.uid))

  }


}
