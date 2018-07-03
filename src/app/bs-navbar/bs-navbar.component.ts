import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from '../models/app.user';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser:AppUser;
  cart$:Observable<ShoppingCart>;

  constructor(public auth:AuthService,
              private router:Router,
              private shoppingCartService:ShoppingCartService ) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appuser => {this.appUser=appuser;}); 
    this.cart$ = await this.shoppingCartService.getCart();  
  }

  logOut(){
   this.auth.logout();
   this.shoppingCartService.clearCart();
   this.router.navigate(['/login']);
  }

}
