import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { Register } from '../Interface/register';
import { Login } from '../Interface/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseURL:string = "https://route-ecommerce.onrender.com/api/v1/auth/"
  baseURL:string= "https://route-ecommerce-app.vercel.app/api/v1/auth/"
  userIslockedin = new BehaviorSubject(false)
  constructor( private _HttpClient:HttpClient ,private _Router:Router) {
    if(localStorage.getItem('token') != null)
    {
      this.userIslockedin.next(true)
      try{
        var decode = jwtDecode(localStorage.getItem('token')+"")
        console.log(decode);
      }

      catch(error:any){
        console.log(error);
        if(error.message){
          this.logout()
        }
      }

    }
  }

hundleRegister(registerform:Register):Observable<any>{
  return this._HttpClient.post(this.baseURL+"signup" , registerform)
}

hundlelogin(loginform:Login):Observable<any>{
  return this._HttpClient.post(this.baseURL+"signin" , loginform)
}

logout(){
  this.userIslockedin.next(false)
  localStorage.removeItem('token')
  this._Router.navigate(['/login']);
}
}
