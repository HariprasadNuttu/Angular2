import { environment } from '../../environments/environment.qa';
import { Observable } from 'rxjs/Rx';
import { UserService } from './user.service';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Http } from '@angular/http';
import { Router, RouterState } from '@angular/router';

@Injectable()
export class AppLoadService {
  public route:Router;
  constructor(private httpClient:HttpClient,public injector: Injector) {
    //  this.route = this.injector.get(Router);

  }
  initializeApp(): void{
    this.httpClient.get(environment.host+'users/verify_authentication_token').subscribe(
      (response:Response)=>{
        switch (response['message'][0]) {
          case 'Authentication token expired.':
          this.updateRefreshToken();
            break;
            case 'Authentication token was verified with success.':
            this.injector.get(Router).navigate([response['role'].toLowerCase()]);
              break;
              case 'Authentication token or refresh_token are required for this call.':

              this.injector.get(Router).navigate(['sign_in'])
                break;
          default:
            break;
        }

      }

   )
  }

  getSettings(): void {
    // console.log(this.route)
    console.log(`getSettings:: before http.get call`);
    //  this.httpClient.get(environment.host+'users/verify_authentication_token').subscribe(
    //     (response:Response)=>{
    //       switch (response['message'][0]) {
    //         case 'Authentication token expired.':
    //         this.updateRefreshToken();
    //           break;
    //           case 'Authentication token was verified with success.':
    //           console.log(this.injector.get(Router))
    //           this.injector.get(Router).navigate([response['role'].toLowerCase()]);
    //             break;
    //             case 'Authentication token or refresh_token are required for this call.':

    //             this.injector.get(Router).navigate(['sign_in'])
    //               break;
    //         default:
    //           break;
    //       }

    //     }

    //  )

  }

  updateRefreshToken(){
  let header = new HttpHeaders().append('refresh-token', localStorage.getItem('refresh_token'));
 this.httpClient.post(environment.host+'users/update_refresh_token',{},{headers:header}).subscribe(
   (response:Response)=>{
        if(response['message']){
          if(response['message'][0]==='Session expired!'){
            this.injector.get(Router).navigate(['sign_in'])
          }

        }
   }
 )
}

}
