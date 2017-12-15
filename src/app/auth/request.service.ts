import { Observable } from 'rxjs/Rx';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import 'rxjs/add/operator/do';
import { Response } from '@angular/http';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {

   }

   intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
     let headers={};
     headers= {setHeaders:{'authentication-token':localStorage.getItem('auth_token')}}

     if(localStorage.getItem('auth_token')!=null){
      //  headers= {setHeaders:{'authentication-token':this.token.getToken('auth_token')}}
      headers= {setHeaders:{'authentication-token':localStorage.getItem('auth_token')}}
     }else{
      headers = {}
     }

    request = request.clone(headers);
    // return next.handle(request);
   return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        // if(event.body.hasOwnProperty('message')){
        //   if(event.body.message[0]=='Authentication token expired.'){
        //     // this.s.updateRefreshToken().subscribe(
        //     //   (response:Response)=>{
        //     //     console.log(response)
        //     //   }
        //     // )
        // }
        // }

      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
   }
}
