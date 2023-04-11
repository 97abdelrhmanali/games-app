import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router , ){
    if(_AuthService.userIslockedin.value == true){
      _Router.navigate(['/home'])
    }
  }
  loginForm : FormGroup = new FormGroup({
    email: new FormControl(null ,[Validators.required , Validators.email ]),
    password: new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) ]),
  })


  login(){
    if(this.loginForm.status == 'VALID'){
      console.log(this.loginForm)
      this._AuthService.hundlelogin(this.loginForm.value).subscribe({
        next:(response)=>{
            if(response.message == 'success')
            {
              this._AuthService.userIslockedin.next(true)
              localStorage.setItem('token',response.token);
              this._Router.navigate(['/home']);
            }
        }
      })
    }
  }


}
