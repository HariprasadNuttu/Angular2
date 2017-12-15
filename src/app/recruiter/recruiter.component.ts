import { UserService } from '../auth/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eteki-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
