import { Product } from "./product";
import { NumberValueAccessor } from "@angular/forms/src/directives/number_value_accessor";

export class ShoppingCartItem{
    $key:string;
    title:string;
    imageUrl:string;
    price:number;
    quantity:number;


    // constructor(public product:Product,public quantity:number){}

   get totalPrice(){
     return this.price*this.quantity;
   }
 

}