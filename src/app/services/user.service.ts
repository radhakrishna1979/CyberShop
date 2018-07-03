import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppUser } from '../models/app.user';

@Injectable()
export class UserService {

  user$;

  constructor(private db:AngularFireDatabase) {
   this.user$= db.list('/users/');
   }

  save(user){
    this.db.object('/users/' +user.uid).update({
      name:user.displayName,
      email:user.email,
      photoURL:user.photoURL
    });
  }

  removeUser(user){
    this.db.object('/users/'+user.$key)
     .remove()
     .then(x=>console.log('Deleted',x))
     .catch(error=>console.log(error))  
   }


  editUser(user){
   this.db.object('/users/'+user.$key)
   .update({"isAdmin":true})
  }

  unsetUser(user){
    this.db.object('/users/'+user.$key)
    .update({"isAdmin":false})
  }


  get(uid:string) :FirebaseObjectObservable<AppUser>{
      return this.db.object('/users/'+uid);
  }

  saveUserInfoFromForm(uid, name, email) {
    return this.db.object('users/' + uid).set({
      name:name,
      email:email
    });
  }

}
