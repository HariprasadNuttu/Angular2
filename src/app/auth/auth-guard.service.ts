import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private userService:UserService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>| Promise<boolean> | boolean {
    console.log("Hello")
    this.userService.verifyAuthenticationToken().subscribe(
      (response:Response)=>{
        if(response['success']){
          switch (response['role']) {
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
          return true;
        }else{
            this.router.navigate(['sign_in'])
        }
      }
    )
    return true;
  }

}
