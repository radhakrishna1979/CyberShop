import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import { UserService } from './user.service';
import { AppUser } from '../models/app.user';
@Injectable()
export class AuthService {

  user$ : Observable<firebase.User>;
  
    constructor(private afAuth:AngularFireAuth,
                private route:ActivatedRoute,
                private userService:UserService) { 
      this.user$ = afAuth.authState; 
     }

    //Register Account Using EmailId and Password
    createUser(email,password){
      return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
    }
  
    //Login with Email and Password 
    loginwithEmailandPassword(email,password) { //:Observable<any>{  
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnUrl);   
      return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      );   
    }
  
    //Login with Google
    loginWithGoogle(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnUrl);  
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());  
    }
  
    //Login with Facebook
    loginwithFacebook(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnUrl);  
      this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }
  
    //Login with Twitter
    loginwithTwitter(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnUrl);
      this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }
  
    //LogOut Implementation
    logout(){
      this.afAuth.auth.signOut();        
    }
  
    get appUser$() :Observable<AppUser>{    
      return this.user$    
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);
        return Observable.of(null);
      })
    }
 
}
