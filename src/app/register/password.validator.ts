import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class PasswordValidtor{
 public static MatchPassword(control:AbstractControl):ValidationErrors|null{
       let password = control.get('password').value;
       let confirm_password = control.get('confirm_password').value;

       if (password!=confirm_password)        
          control.get('confirm_password').setErrors({MatchPassword:true})       
         else  return null;        
    }
}