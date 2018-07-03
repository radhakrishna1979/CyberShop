
import { AppUser } from './../models/app.user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { PasswordValidtor } from './password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form:FormGroup;
  constructor(fb:FormBuilder,private auth:AuthService,private userService:UserService,private router:Router){ 
    this.form= fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],    
      password:['',[Validators.required,Validators.minLength(6)]],
      confirm_password:['',Validators.required]
     },{
      validator:PasswordValidtor.MatchPassword
    })
  }

  get username(){
    return this.form.get('username');     
  }

  get email(){
    return this.form.get('email');   
  }

  get password(){
    return this.form.get('password');   
  }

  get confirm_password(){
    return this.form.get('confirm_password');     
  }

  submitForm(){
    let name = this.username.value;
    let emailAddress = this.email.value;
    let password = this.password.value;

    this.auth.createUser(emailAddress,password)
     .then(user=>{
         this.userService.saveUserInfoFromForm(user.uid,name,emailAddress);
         }).then(()=>{
            console.log('Navigating to Home PAge');
            this.router.navigate(['']);
   
     }); 
     }
    
}
  

