import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';

@Injectable()
export class EmailService {

  feedbackUrl="https://192.168.0.14/feedback";
  ordersUrl="https://192.168.0.14/email/";

  constructor(private http:Http) {}

  initiateHeaders(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});  
    return options;
  }

  sendFeedback(feedback){
   let options = this.initiateHeaders();
      return this.http.post(this.feedbackUrl,JSON.stringify(feedback),options);    
  }

  sendOrders(Info){
    let options = this.initiateHeaders();
    return this.http.post(this.ordersUrl,JSON.stringify(Info),options); 
  }

}
