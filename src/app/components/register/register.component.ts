import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}
  registerForm : FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required ,Validators.minLength(3), Validators.maxLength(20),Validators.pattern(/^[A-Z][A-Za-z]{0,}$/) ]),
    email:new FormControl(null , [ Validators.required, Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) ]),
    rePassword:new FormControl(null ,  [Validators.required]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  register(){
    console.log("hi");

    if(this.registerForm.status == 'VALID'){
      console.log(this.registerForm)
      this._AuthService.hundleRegister(this.registerForm.value).subscribe({
        next:(response)=>{
          if(response.message == 'success'){
            this._Router.navigate(['/login'])
          }
        }
      })
    }
  }
}
