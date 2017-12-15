import { Injectable } from '@angular/core';
import { AuthService } from "angular2-social-login";
@Injectable()
export class SocialLoginService {

  constructor(public _auth: AuthService) { }

  signIn(provider){
     this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
                }
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{
        console.log(data)
        //return a boolean value.
      }
    )
  }
}
