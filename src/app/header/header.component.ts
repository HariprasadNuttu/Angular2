import { Response } from '@angular/http';
import { UserService } from '../auth/user.service';
import { Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eteki-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:Object;
  constructor(private userService:UserService) { }

  ngOnInit() {
    console.log(this.userService.getUser())

  }

  logout(){
this.userService.logout();
  }

}
