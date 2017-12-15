import { TokenService } from './token.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserResponse } from '../models/user-response.model';
import { Router } from '@angular/router';
@Injectable()
export class UserService {
  userData: EventEmitter<UserResponse> = new EventEmitter();
  user:Object;
  constructor(private http:HttpClient,private router:Router,private tokenService:TokenService) { }

SignIn(UserObject){
   return  this.http.post(environment.host+'users/sign_in',UserObject);
}
getUser(){
  return this.user;
}
setUser(user:Object){
this.user = user;
}

profileDetails(){
  return this.http.get(environment.host+'profile_details');
}

updateRefreshToken(){
  let header = new HttpHeaders().append('refresh-token', this.tokenService.getToken('refresh_token'));
  return this.http.post(environment.host+'users/update_refresh_token',{},{headers:header});
}

verifyAuthenticationToken(){
  return this.http.get(environment.host+'users/verify_authentication_token');
}

logout(){
  let header = new HttpHeaders().append('refresh-token', this.tokenService.getToken('refresh_token'));
  this.http.post(environment.host+'users/sign_out',{},{ headers: header }).subscribe(
    (response:Response)=>{
    if(response['success']){
this.router.navigate(['sign_in'])
    }
    }
    )
}



}
