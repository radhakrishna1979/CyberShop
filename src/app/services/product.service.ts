import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  
    createProduct(product){
      return this.db.list('/products/').push(product);
    }
  
    getAll(){
      return this.db.list('/products/');
    }
  
    getProductByDept(){
      return this.db.list('/products', {
        query: {
            orderBy: 'dept',
            equalTo:'Baby'         
            }
      });
    }
  
    getProduct(productId){
      return this.db.object('/products/' + productId);
    }
  
    updateProduct(product,productId){
      return this.db.object('/products/'+productId).update(product);
    }
  
    deleteProduct(productId){
      return this.db.object('/products/'+productId).remove();
    }
  

}
