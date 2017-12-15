import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor(private http:HttpClient) { }

storeTokens(auth_token,refresh_token){
  localStorage.setItem('auth_token',auth_token);
  localStorage.setItem('refresh_token',refresh_token);
}
getToken(key){
return localStorage.getItem(key);
}
// updateRefreshToken(){
//   let header = new HttpHeaders().append('refresh-token', this.getToken('refresh_token'));
//   return this.http.post(environment.host+'users/update_refresh_token',{},{headers:header});
// }
}
