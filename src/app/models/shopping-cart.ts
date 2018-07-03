import { ShoppingCartItem } from "./shopping-cart-items";
import { Product } from "./product";

export class ShoppingCart{
  
  items:ShoppingCartItem[]=[];

  constructor(public itemsMap:{[productId:string]:ShoppingCartItem}){
      for (let productId in itemsMap){ 
         let item = itemsMap[productId];   
         let x = new ShoppingCartItem();
         Object.assign(x,item);
         x.$key=productId;
          this.items.push(x);
      };
  }

  getQuantity(product:Product){
 //   console.log('***');
   // console.log(product);
     if (this.itemsMap){      
    //  return this.itemsMap.product.quantity;
      let item = this.itemsMap[product.$key];     
      return item ? item.quantity:0
    } else {
      return 0;
    }

   }

  get totalPrice(){
      let sum=0;
      for (let productId in this.items){
        sum+=this.items[productId].totalPrice;
      }
      return Math.round(sum);
  }


  get totalItemsCount(){
    let count=0;
    for (let productId in this.itemsMap)
      count+= this.itemsMap[productId].quantity;    
    return count;
  }
}