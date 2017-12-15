import { UserService } from './auth/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Params } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

constructor(private userService:UserService){
}
ngOnInit(){
// this.userService.profileDetails().subscribe(
//   (params:Params)=>{

//   }
// )
}
}
