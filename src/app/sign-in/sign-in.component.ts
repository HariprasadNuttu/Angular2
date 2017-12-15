import { Params, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms/src/directives';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
  import {UserService} from '../auth/user.service'
  import {Role} from '../auth/Role'
import { TokenService } from '../auth/token.service';

import { AuthService } from "angular2-social-login";
@Component({
  selector: 'eteki-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
signInForm:FormGroup;
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private tokenService:TokenService,private _auth: AuthService) {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {

  }


  onSubmit(form:NgForm){

    this.userService.SignIn(form.value).subscribe(
      (response:Response)=>{
        console.log(response)
        if(response['success']){
          this.tokenService.storeTokens(response['authentication_token'],response['refresh_token'])
          this.userService.setUser(response)
          switch (response['user']['role']) {
            case 'Interviewer':
            this.router.navigate(['interviewer']);
              break;
              case 'Recruiter':

              this.router.navigate(['recruiter']);
                break;
                case 'Candidate':
                this.router.navigate(['candidate']);
                  break;
            default:
            this.router.navigate(['sign_in']);
              break;
          }
        }

        /*
        const data:any = response.json();
        console.log(data)
        if(data['success']){
          // this.authService.userData.emit(data);
            switch (data['user']['role']) {
              case 'Interviewer':
              this.router.navigate(['interviewer']);
                break;
                case 'Recruiter':

                this.router.navigate(['recruiter']);
                  break;
                  case 'Candidate':
                  this.router.navigate(['candidate']);
                    break;
              default:
              this.router.navigate(['sign_in']);
                break;
            }

        }
*/
      }
    )
  }



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
      (data)=>{//return a boolean value.
      }
    )
  }

}
