import { UserService } from './services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appUser;

  constructor(private auth:AuthService,private router:Router,private userService:UserService){
    this.auth.user$.subscribe(user =>{
      if(user){
        if (user.displayName){
          this.userService.save(user);
          let returnUrl= localStorage.getItem("returnUrl");
         // console.log(returnUrl);
          this.router.navigateByUrl(returnUrl);  
        } 
        else {    
          this.router.navigate(['']);
        }
      }
    });
  }
}
