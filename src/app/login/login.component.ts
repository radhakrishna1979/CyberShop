import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
  });

  constructor(private auth: AuthService, private router: Router) { }
 
  Login() {
    let inputValue = this.form.value;
    console.log(this.form.value);
     this.auth.loginwithEmailandPassword(inputValue.username, inputValue.password)
      .subscribe(success => {
       //this.router.navigate(['']);
       let returnUrl= localStorage.getItem("returnUrl");
       console.log(returnUrl);
       this.router.navigateByUrl(returnUrl);
      })
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  loginG() {
    this.auth.loginWithGoogle();
  }

  loginFB() {
    this.auth.loginwithFacebook()
  }

  loginTW() {
    this.auth.loginwithTwitter();
  }

  ngOnInit(){

  }

}
