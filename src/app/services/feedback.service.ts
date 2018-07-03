import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FeedbackService {

  constructor(private db:AngularFireDatabase) { }

  async saveFeedBack(feedback){
    let result= await this.db.list('/customerFeedback').push(feedback);
    return result;   
    }


}
